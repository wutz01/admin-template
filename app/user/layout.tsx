"use client";

import LeftSideNav from "@/components/common/left-sidenav";
import TopNav from "@/components/common/top-nav";
import { CLIENTS_NAV, PROFILE_NAV } from "@/lib/types";
import { useState } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
 return (
  <div>
    <LeftSideNav navigationMenu={CLIENTS_NAV} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <div className="lg:pl-72">
      
      <TopNav userNavigation={PROFILE_NAV} setSidebarOpen={setSidebarOpen} />
      <main className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  </div>
 )
}
