"use client"
import React, { useEffect ,useState} from 'react'
import { getWorkshopDetails } from '../../actions/workshopAction'

type Props ={
    workshopId:string
    
}
const WorkshopDetails = (props:Props) => {
    type Workshop = {
        id: string;
        title: string;
        desc: string;
        tag: string;
        topics: string[];
        mentor: string;
        time: string;
        thumbnail: string;
      }
    
    const id = props.workshopId
    useEffect(() => {
        getData()
    },[])
    const [data, setdata] = useState<Workshop | null>(null);
    const getData = async () => {
        const mydata:any = await getWorkshopDetails({id})
        setdata(mydata)
        
    }
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 md:p-6">
      {data && (
        data.topics.map((topic) => (
          <div key={topic} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:scale-105 dark:bg-gray-950">
          <div className="p-4 md:p-6">
            <h3 className="text-xl font-bold mb-2">{topic}</h3>
          </div>
        </div>
        ))
      )}
  
   
   
   
  
    
   
 
  </section>
  )
}

export default WorkshopDetails