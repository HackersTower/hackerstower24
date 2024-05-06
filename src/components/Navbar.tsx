import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";


import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"

const Navbar = () => {
  const { userId } = auth();
  const navbarMenue = [
    {
      name: "Home",
      href: "/",
    },
    {
      name:"Workshop",
      href: "/workshop",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "About",
      href: "/about",
    },
   
    {
      name: "Contact",
      href: "/contact",
    }
  ]
  return (
   
   
    <header className="flex h-16 w-full items-center justify-between bg-gray-900 px-4 md:px-6 py-4">
      <Link className="flex items-center gap-2 text-lg font-semibold text-gray-50" href="#">
        {/* <MountainIcon className="h-6 w-6" /> */}
        <span>HackersTower</span>
      </Link>
      <nav className="hidden space-x-4 md:flex">
        {navbarMenue.map((item) => (
          
        <Link key={item.name}
        className="inline-flex h-9 items-center justify-center rounded-xl  px-2  font-bold transition-colors   text-white hover:bg-white hover:text-gray-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950"
        href={item.href}
      >
       {item.name}
      </Link>
        ))}

        {
          userId ? (
            <>
            {/* <p className='text-white'>Sumit</p> */}
            <SignedIn>
              <UserButton />
            </SignedIn>
            </>
            
          ):(
            <>
            <Link href="/sign-in" className='bg-[#bd1e59] text-white h-9 py-2 hover:bg-[#a31648] font-bold  inline-flex items-center px-2 rounded-xl   '>
        Login
      </Link>

      <Link href="/sign-up" className='bg-[#bd1e59] h-9 py-2 text-white hover:bg-[#a31648] font-bold  inline-flex items-center px-2 rounded-xl   '>
        Sign
      </Link>
            </>
          )
        }


       
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6 text-gray-50" />
            <span className="sr-only text-white">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 py-6 px-4">
            {navbarMenue.map((item) => (
               <Link key={item.name} className="flex w-full items-center py-2 text-lg font-semibold text-gray-50" href={item.href}>
              {item.name}
             </Link>
            ))}
           
            
           
           {
          userId ? (
            <>
            {/* <p className='text-white'>Sumit</p> */}
            <SignedIn>
              <UserButton />
            </SignedIn>
            </>
            
          ):(
            <>
            <Link href="/sign-in" className='bg-[#bd1e59] text-white h-9 py-2 hover:bg-[#a31648] font-bold  inline-flex items-center px-2 rounded-xl   '>
        Login
      </Link>

      <Link href="/sign-up" className='bg-[#bd1e59] h-9 py-2 text-white hover:bg-[#a31648] font-bold  inline-flex items-center px-2 rounded-xl   '>
        Sign
      </Link>
            </>
          )
        }
          </div>
        </SheetContent>
      </Sheet>
    </header>

  
  )
}

function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

export default Navbar
