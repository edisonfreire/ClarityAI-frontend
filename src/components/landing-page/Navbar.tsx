'use client';
import { useState } from 'react'
import Link from 'next/link'
import { BrainCircuitIcon, Menu, X } from 'lucide-react'
import { LANDING_PAGE_LINKS } from '@/constants';
import { SignedIn, SignedOut } from '@clerk/nextjs';

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-x-neutral-700/80'>
      <div className='container px-4 mx-auto relative text-sm'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center flex-shrink-0'>
            {/* From public folder */}
            <BrainCircuitIcon className='mr-2' />
            <span className='text-xl tracking-tight'>ClarityAI</span>
          </div>
          <ul className='hidden lg:flex ml-14 space-x-12'>
            {LANDING_PAGE_LINKS.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className='hidden lg:flex justify-center space-x-12 items-center'>
            <SignedIn>
              <Link href='/dashboard' className='py-2 px-3 border rounded'>Dashboard</Link>
            </SignedIn>
            <SignedOut>
              <Link href='/sign-in' className='py-2 px-3 border rounded'>Login</Link>
              <Link href='/sign-up' className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Sign Up</Link>
            </SignedOut>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className='fixed bg-gray-200 right-0 z-2 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
            <ul>
              {LANDING_PAGE_LINKS.map((link, index) => (
                <li key={index} className='py-4'>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <SignedIn>
                <Link href='/dashboard' className='py-2 px-3 border rounded'>Dashboard</Link>
              </SignedIn>
              <SignedOut>
                <Link href='/sign-in' className='py-2 px-3 border rounded'>Login</Link>
                <Link href='/sign-up' className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Sign Up</Link>
              </SignedOut>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar