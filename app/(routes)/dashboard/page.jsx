"use client"

import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import CardInfo from './_components/CardInfo';
import { db } from '@/utils/dbConfigs';
import { desc, eq, getTableColumns, sql } from 'drizzle-orm';
import { Budgets, Expenses } from '@/utils/schema';

function Dashboard() {

  const { user } = useUser();
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
  }

  useEffect(() => {
    user && getBudgetList();
  }, [user]);

  return (

    <div className='p-8'>
      <h2 className='font-bold text-3xl'>Hi, {user?.fullName} 👋!</h2>
      <p className='text-gray-500 mt-0.5'>Here's what happening wiht your money, Lets manage your Money!</p>
      <CardInfo budgetList={budgetList} />
    </div>
  )
}

export default Dashboard