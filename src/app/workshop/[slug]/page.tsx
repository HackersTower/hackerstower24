import WorkshopRigisterForm from "@/components/WorkshopRigisterForm"
import WorkshopDetails from "@/components/WorkshopDetails"
export default function Page({ params }: { params: { slug: string } }) {
    return (
        
        <div className="h-full bg-[#121212]   p-4 ">
          <div className="flex flex-col md:flex-row items-center justify-center">

            {/* user form */}
            <div className="flex-row w-full md:w-1/2  p-4 ">
              <WorkshopRigisterForm workshopId={params.slug.toString()}/>
            </div>
            {/* workshop details */}
            <div className="flex flex-row  w-full   justify-center items-center md:w-1/2  p-4 ">
              {/* workshop details here */}
              
              <WorkshopDetails workshopId={params.slug.toString()}/>
            </div>
          </div>
        </div>

)
  }