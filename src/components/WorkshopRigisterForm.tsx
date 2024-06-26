"use client"
import React from 'react'
import Link from 'next/link'
const WorkshopRigisterForm = () => {
  return (
    <>
    <div className="w-full max-w-sm mx-auto overflow-hidden bg-gray-800 border-2 border-white-500 rounded-lg shadow-md dark:bg-gray-800">
  <div className="px-6 py-4">
    <div className="flex justify-center mx-auto">
      <img
        className="w-auto h-7 sm:h-8"
        src="https://merakiui.com/images/logo.svg"
        alt=""
      />
    </div>
    <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
    Register for workshop
    </h3>
    <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
    Get Mentorship With Experts
    </p>
    <form>
      <div className="w-full mt-4">
        <input
          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
          type="text"
          placeholder="Full Name"
          
        />
      </div>
      <div className="w-full mt-4">
        <input
          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
          type="email"
          placeholder="Email Address"
          
        />
      </div>
      <div className="w-full mt-4">
        <input
          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
          type="text"
          placeholder="Mobile Number"
          
        />
      </div>
      <div className="flex items-center justify-center mt-4">

        <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
        Register
        </button>
      </div>
    </form>
  </div>
  
</div>

    </>
  )
}

export default WorkshopRigisterForm