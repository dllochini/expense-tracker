import React from 'react'
import SideNav from './_components/SideNav'
import DashboardHeader from './_components/DashboardHeader'

function DashboardLayout({children}) {
  return (
    <div>
        
        <div className=' border fixed md:w-64 hidden md:block '>
            <SideNav />
        </div>
        <div className='border md:ml-64'>
          <DashboardHeader />
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout