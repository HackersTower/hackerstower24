import React from 'react'

const page = () => {
  return (
<div className='h-screen flex-row bg-[#121212] p-6'>
    <div className='flex justify-center items-center '>
        <h1 className='text-3xl font-bold text-white'>UPCOMMING WORKSHOPS</h1>
    </div>

    <div className='flex justify-center items-center mt-4 p-2'>
    <div className="max-w-2xl px-8 py-4 text-white rounded-lg shadow-mdbg-gray-800 border-2 border-sky-500">
  <div className="flex items-center justify-between">
    <span className="text-sm font-light text-white">
      Mar 10, 2019
    </span>
    <a
      className="px-3 py-1 text-sm font-bold text-white transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
      tabIndex={0}
      role="button"
    >
      Design
    </a>
  </div>
  <div className="mt-2">
    <a
      href="#"
      className="text-xl font-bold text-white dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
      tabIndex={0}
      role="link"
    >
      Accessibility tools for designers and developers
    </a>
    <p className="mt-2 text-white ">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita
      dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
      reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione
      libero!
    </p>
  </div>
  <div className="flex items-center justify-center mt-4">
  <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Join Workshop
</button>
   
  </div>
</div>

    </div>
    
     </div>
  )
}

export default page