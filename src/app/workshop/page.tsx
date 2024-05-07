"use client"
import React from 'react'
import { useEffect,useState } from 'react'
import Link from 'next/link'
import workshophelper from '@/utils/workshopHelper'
const Page = () => {
  interface Workshop {
    id: string;
    title: string;
    desc: string;
    tag: string;
    topics: string[];
    mentor: string;
    time: string;
    thumbnail: string;
  }
  const [data, setData] = useState<Workshop[] | null>(null);

  const [isLoading,setisLoading] = useState(true)
  useEffect( () => {
    getAllWorkshops()
  },[])

  const getAllWorkshops = async () => {
    try {
      const mydata:any= await workshophelper.getAllWorkshop();
      setData(mydata.data.data.data);
      setisLoading(false);
    } catch (error) {
      console.error('Error fetching workshops:', error);
    }
   

   
  }

  useEffect(() => {
    console.log(data,"in state form")
  },[data])
  return (
<div className='h-screen flex-row bg-[#121212] p-6'>
    <div className='flex justify-center items-center '>
        <h1 className='text-3xl font-bold text-white'>UPCOMMING WORKSHOPS</h1>
    </div>

    <div className='flex justify-center items-center mt-4 p-2'>
     {isLoading? (
      <p>Loading</p>
     ):(
      data && data.map((workshop) => (
        <>
         <div key={workshop.id} className="max-w-2xl px-8 py-4 text-white rounded-lg shadow-mdbg-gray-800 border-2 border-sky-500">
  <div className="flex items-center justify-between">
    <span className="text-sm font-light text-white">
      {/* Mar 10, 2019 */}
      {
        workshop.time
      }
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
      {workshop.title}
    </a>
    <p className="mt-2 text-white ">
      {workshop.desc}
    </p>
  </div>
  <div className="flex items-center justify-center mt-4">
  <Link href={`/workshop/${workshop.id}`} className="bg-blue-500 w-full text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Join Workshop
</Link>
   
  </div>
</div>
        </>
      ))
     )}
   

    </div>
    
     </div>
  )
}

export default Page