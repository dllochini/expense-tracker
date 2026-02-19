import { Button } from '@/components/ui/button'
import { db } from '@/utils/dbConfigs'
import { Expenses } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Trash } from 'lucide-react'
import { refresh } from 'next/cache'
import { toast } from 'sonner'


function ExpenseListTable({ expensesList, refreshData }) {

    const deleteExpense = async (expense) => {
        const result = await db.delete(Expenses)
            .where(eq(Expenses.id, expense.id))
            .returning();

        if (result) {
            toast('Expense Deleted Successfully!')
            refreshData();
        }
    }

    return (
        <div className='mt-3'>
            <h2 className='font-bold text-lg'>Latest Expenses</h2>
            <div className='grid grid-cols-4 bg-slate-200 p-2 mt-3'>
                <h2 className='font-bold'>Name</h2>
                <h2 className='font-bold'>Amount</h2>
                <h2 className='font-bold'>Date</h2>
                <h2 className='font-bold'>Action</h2>
            </div>
            {expensesList.map((expenses, index) => (
                <div key={index} className='grid grid-cols-4 bg-slate-50 p-2 items-center'>
                    <h2>{expenses.name}</h2>
                    <h2>${expenses.amount}</h2>
                    <h2>{expenses.createdAt.toLocaleDateString()}</h2>
                    <h2>
                        <Button
                            className="flex items-center gap-2 border border-red-400 bg-transparent text-red-500 hover:bg-red-50 px-4 py-2 rounded-md"
                            onClick={() => deleteExpense(expenses)}
                        >
                            <Trash />
                        </Button>

                    </h2>
                </div>
            ))}
        </div>
    )
}

export default ExpenseListTable