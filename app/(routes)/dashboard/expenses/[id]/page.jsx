"use client"

import { db } from '@/utils/dbConfigs'
import { Budgets, Expenses } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { desc, eq, getTableColumns, sql } from 'drizzle-orm';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import BudgetItem from '../../budgets/_components/BudgetItem';
import AddExpense from '../_components/AddExpense';
import ExpenseListTable from '../_components/ExpenseListTable';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from 'sonner';
import EditBudget from '../_components/EditBudget';


function ExpensesScreen() {

    const { id } = useParams();
    const { user } = useUser();

    const route = useRouter();

    const [budgetInfo, setBudgetInfo] = useState(null);
    const [expensesList, setExpensesList] = useState([])

    const getBudgetInfo = async () => {

        const result = await db.select({
            ...getTableColumns(Budgets),
            totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
            totalItem: sql`count(${Expenses.id})`.mapWith(Number)
        })
            .from(Budgets)
            .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetID))
            .where(eq(Budgets.createdBy, user.primaryEmailAddress.emailAddress))
            .where(eq(Budgets.id, id))
            .groupBy(Budgets.id);

        setBudgetInfo(result[0] ?? null);

    }

    const getExpensesList = async () => {
        const result = await db.select().from(Expenses)
            .where(eq(Expenses.budgetID, id))
            .orderBy(desc(Expenses.id))
        setExpensesList(result)
        console.log(result)
    }

    const deleteBudget = async () => {

        const result1 = await db.delete(Expenses)
            .where(eq(Expenses.budgetID, id))
            .returning()

        if (result1) {
            const result2 = await db.delete(Budgets)
                .where(eq(Budgets.id, id))
                .returning()
        }

        toast('Budget Deleted Successfully! ');
        route.replace('/dashboard/budgets');


    }

    const refreshAll = () => {
        getBudgetInfo()
        getExpensesList()
    }

    useEffect(() => {
        user && getBudgetInfo();
        getExpensesList();

    }, [user, id]);

    return (
        <div className='p-10'>
            <h2 className='text-2xl font-bold  flex justify-between items-center'>
                My Expenses
                <div className='flex gap-2 items-center'>

                    <EditBudget user={user} budgetInfo={budgetInfo} refreshData={()=>refreshAll()}/>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button className='flex gap-2' variant='destructive'>
                                <Trash /> Delete</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your current budget along with expenses.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => deleteBudget()}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>

            </h2>



            <div className='grid grid-cols-1 md:grid-cols-2 mt-6 gap-5'>
                {budgetInfo ?
                    <BudgetItem budget={budgetInfo} /> :
                    <div className='w-full bg-slate-200 rounded-lg h-37.5 animate-pulse'></div>
                }
                <AddExpense budgetId={id} user={user} refreshData={() => refreshAll()} />
            </div>
            <div>
                <h2 className='font-bold text-lg'>Latest Expenses</h2>
                <ExpenseListTable expensesList={expensesList} refreshData={() => refreshAll()} />
            </div>
        </div>
    )
}

export default ExpensesScreen
