"use client"
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Header = () => {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace('/dashboard');
    }
    
  }, [isLoaded, isSignedIn, router]);
  
  if (!isLoaded) return null;

  return (
    <header className='px-7 py-5 flex justify-between items-center border shadow-md'>
      <Image src='/tracker-logo2.png' alt='logo' width={230} height={50} />
      <div className="flex gap-2">
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Button size='heroOutline' asChild>
            <Link href={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}>
              Sign Up
            </Link>
          </Button>
        )}
      </div>
    </header>
  )
}

export default Header
