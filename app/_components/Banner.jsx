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
                            <a className="inline-block rounded bg-primary px-5 py-3 font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/85" href="#">
                                Get Started
                            </a>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner