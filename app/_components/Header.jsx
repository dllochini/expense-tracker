import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <>
            <div className='p-5 flex justify-between items-center border shadow-md'>
                <Image src='/tracker-logo1.png' alt='logo' width={120} height={50} />
                <Button>Get Started</Button>
            </div>
            
        </>

    )
}

export default Header   