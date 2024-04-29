export default function Page({ params }: { params: { slug: string } }) {
    return (
        
        <div className="h-screen bg-[#121212] ">My Post: {params.slug}</div>

)
  }