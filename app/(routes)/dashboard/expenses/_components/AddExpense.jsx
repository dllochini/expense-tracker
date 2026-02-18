"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { db } from '@/utils/dbConfigs';
import { Budgets, Expenses } from '@/utils/schema';
import { timestamp } from 'drizzle-orm/pg-core';
import React, { useState } from 'react'
import { toast } from 'sonner';

function AddExpense({budgetId , refreshData}) {

    const [name, setName] = useState();
    const [amount, setAmount] = useState();

    const addNewExpense= async ()=>{
            const result = await db.insert(Expenses).values({
                name:name,
                amount:amount,
                budgetID:budgetId,
            }).returning({InsertedId:Budgets.id})

        console.log(result)

        if(result){
            refreshData()
            toast('New Expense Added!')
        }
    }

    return (
        <div className='border rounded-lg p-5'>
            <h2 className='font-bold text-lg'>Add Expense</h2>
            <div className='mt-1'>
                <h2 className='text-black font-medium my-1'>Expense Name</h2>
                <Input

                    placeholder="e. g. Bedroom Decor"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='mt-2'>
                <h2 className='text-black font-medium my-1'>Expense Amount</h2>
                <Input

                    placeholder="e. g. 1000"
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <Button disabled={!(name && amount)} className="mt-3 w-full"
            onClick={()=>addNewExpense()}
            >Add New Expense</Button>
        </div>

    )
}

export default AddExpense