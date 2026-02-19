"use client"

import { Button } from '@/components/ui/button'
import { PenBox } from 'lucide-react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog"
import EmojiPicker from 'emoji-picker-react'
import { Input } from '@/components/ui/input';
import { Budgets } from '@/utils/schema';
import { toast } from 'sonner';
import { db } from '@/utils/dbConfigs';
import { eq } from 'drizzle-orm'

function EditBudget({ user, budgetInfo, refreshData }) {

    const [emojiIcon, setEmojiIcon] = useState();
    const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

    const [name, setName] = useState();
    const [amount, setAmount] = useState();

    const onUpdateeBudget = async () => {
        const result = await db.update(Budgets)
            .set({
                name: name,
                amount: amount,
                icon: emojiIcon,
            })
            .where(eq(Budgets.id, budgetInfo.id))
            .returning()

        if (result) {
            refreshData();
            toast('Budget Updated Successfully!')
        }
    }

    useEffect(() => {
        if (budgetInfo) {
            setName(budgetInfo.name);
            setAmount(budgetInfo.amount);
            setEmojiIcon(budgetInfo.icon);
        }
    }, [budgetInfo]);


    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className='flex gap-2'> <PenBox /> Edit</Button>
                </DialogTrigger>

                <DialogContent>

                    <DialogHeader>
                        <DialogTitle>Update New Budget</DialogTitle>
                    </DialogHeader>

                    <div className=' relative'>
                        <Button
                            variant='outline'
                            className="text-lg"
                            onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                        >
                            {emojiIcon}
                        </Button>

                        {openEmojiPicker && (
                            <div className='absolute mt-2 z-10'>
                                <EmojiPicker
                                    onEmojiClick={(e) => {
                                        setEmojiIcon(e.emoji)
                                        setOpenEmojiPicker(false)
                                    }}
                                />
                            </div>
                        )}
                    </div>
                    <div className='mt-1'>
                        <h2 className='text-black font-medium my-1'>Budget Name</h2>
                        <Input

                            value={name || ""}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='mt-1'>
                        <h2 className='text-black font-medium my-1'>Budget Amount</h2>
                        <Input
                            value={amount || ""}
                            type="number"
                            placeholder="e. g. 1000$"
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button
                                disabled={!(name && amount)}
                                onClick={() => onUpdateeBudget()}
                                className='mt-3 w-full'>Update Budget
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default EditBudget