"use client"

import { useEffect, useState } from 'react'
import ExpenseListTable from './_components/ExpenseListTable'
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/dbConfigs';
import { desc, eq, getTableColumns, sql } from 'drizzle-orm';
import { Budgets, Expenses } from '@/utils/schema';

function ExpensesPage() {

  const { user } = useUser();
  const [expenseList, setExpensesList] = useState([]);

  const [budgetList, setBudgetList] = useState([]);

  const getBudgetList = async () => {

    const result = await db.select({
      ...getTableColumns(Budgets),
      totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
      totalItem: sql`count(${Expenses.id})`.mapWith(Number)
    })
      .from(Budgets)
      .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetID))
      .where(eq(Budgets.createdBy, user.primaryEmailAddress.emailAddress))
      .groupBy(Budgets.id)
      .orderBy(desc(Budgets.id));

    setBudgetList(result);
    getAllExpenses();
  }

  const getAllExpenses = async () => {
    const result = await db.select({
      id: Expenses.id,
      name: Expenses.name,
      amount: Expenses.amount,
      createdAt: Expenses.createdAt
    }).from(Budgets)
      .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetID))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress.emailAddress))
      .orderBy(desc(Expenses.id))

    setExpensesList(result)

  }

  useEffect(() => {
    user && getBudgetList();
  }, [user]);

  return (
    <div className='p-10'>
      <h2 className='font-bold text-3xl'>My Expenses</h2>
      <ExpenseListTable
        expensesList={expenseList}
        refreshData={() => getBudgetList()}

      />
    </div>
  )
}

export default ExpensesPage