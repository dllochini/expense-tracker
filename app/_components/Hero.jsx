"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <>
            <section className="relative pt-13 lg:pt-17">
                <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">

                    <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
                        <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl 
              bg-[#4845D2]/60 blur-xl opacity-60 lg:opacity-95 lg:block hidden" />
                        <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl 
              bg-[#C3C2FF]/80 blur-xl opacity-80" />
                    </div>

                    <span className="w-4/12 lg:w-2/12 aspect-square 
            bg-gradient-to-tr from-[#4845D2] via-[#6B65FF] to-[#C3C2FF] 
            absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />

                    <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">

                        <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight
              font-bold text-gray-900 dark:text-white">

                            <span className="block">
                                Master your{" "}
                                <strong className="font-bold text-transparent bg-clip-text 
                  bg-gradient-to-br from-[#4845D2] via-[#6B65FF] to-[#C3C2FF]">
                                    Budget
                                </strong>
                            </span>

                            <span className="block">Master your Life!</span>
                        </h1>

                        <p className="mt-4 text-base sm:text-lg/relaxed text-[color:var(--muted-foreground)]">
                            Start managing your budget and save tons of money!
                        </p>

                        <div className="mt-4 flex justify-center gap-4 sm:mt-6">
                            <Button variant="hero" size="hero" asChild>
                                <Link href={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}>
                                    Get Started
                                </Link>
                            </Button>

                            <Button variant="heroOutline" size="hero" asChild>
                                <Link href="/learn-more">Learn More</Link>
                            </Button>
                        </div>

                    </div>

                    <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                        <img
                            src="https://t3.ftcdn.net/jpg/06/18/60/30/360_F_618603059_lhHvL1vLRoZuSsg08mDDRcu6woibITvo.jpg"
                            alt="Hero img"
                            className="w-[2350px] h-[2359px] lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
                        />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero
