"use client"
import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function DashboardHeader() {
  return (
    <header className="w-full px-6 py-4 bg-white dark:bg-[#0f172a] 
      border-b shadow-sm flex items-center justify-between">

      {/* Search Bar */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search expenses..."
          className="w-full pl-10 pr-4 py-2 rounded-full border 
          bg-gray-50 dark:bg-[#1e293b] 
          border-gray-200 dark:border-gray-700
          text-sm outline-none focus:ring-2 focus:ring-[#4845D2]
          transition"
        />
      </div>

      {/* User Section */}
      <div className="ml-4 flex items-center gap-3">
        <UserButton afterSignOutUrl="/" />
      </div>
      
    </header>
  )
}

export default DashboardHeader
