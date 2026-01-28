import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <div>
            <section className="bg-gray-50">
                <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                    <div className="mx-auto max-w-prose text-center">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl p">
                            <span className="block">Manage your expenses</span>
                            <span className="block mt-3"><strong className="text-primary"> Control
                                your money</strong></span>
                        </h1>

                        <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                            Start managing your budget and save ton of money
                        </p>

                        <div className="mt-4 flex justify-center gap-4 sm:mt-6">
                            <Button asChild><Link href={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}>Get Started</Link></Button>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner