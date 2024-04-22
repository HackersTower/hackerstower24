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

const Navbar = () => {
  const { userId } = auth();
  return (
    <>
    <>

  <div className="flex flex-wrap place-items-center">
    <section className="relative mx-auto">
   
      <nav className="flex justify-between bg-[#121212] text-white w-screen">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <a className="text-3xl font-bold font-heading" href="#">
            {/* <img class="h-9" src="logo.png" alt="logo"> */}
            HackersTower
          </a>
          {/* Nav Links */}
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li>
              <Link className="hover:text-gray-200" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="/blogs">
               Blogs
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="/courses">
               Courses
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="/workshop">
                
        Workshop
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="/contact">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="hidden xl:flex items-center space-x-5">
            

          {userId ? (
        
        <>
        <Link className="text-gray-300 hover:text-white" href="#">
                <SignedIn>

        <UserButton />
      </SignedIn>
      </Link>

        </>
      ):(
        <>
        

      <Link href="/sign-in">
      <Button className="bg-[#bd1e59] text-white  hover:bg-[#a31648]" >Login</Button>
      </Link>
      <Link href="/sign-up">
    <Button className="bg-[#bd1e59] text-white hover:bg-[#a31648]" >Sign</Button>
    </Link>
        </>
      )}



          </div>
        </div>
        {/* Responsive navbar To do make nav-burger working */}
       
        <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </a>
      </nav>
    </section>
  </div>
  {/* Does this resource worth a follow? */}
  {/* <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
      <a
        title="Follow me on twitter"
        href="https://www.twitter.com/asad_codes"
        target="_blank"
        className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
      >
        <img
          className="object-cover object-center w-full h-full rounded-full"
          src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
        />
      </a>
    </div>
  </div> */}
</>

    </>
  )
}

export default Navbar
