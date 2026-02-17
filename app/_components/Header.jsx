"use client"
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {

  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return null; 
  }

  return (
    <div className='p-5 flex justify-between items-center border shadow-md'>
      <Image src='/tracker-logo1.png' alt='logo' width={120} height={50} />
      <div className="flex gap-2">
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Button asChild>
            <Link href={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}>
              Get Started
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}

export default Header
