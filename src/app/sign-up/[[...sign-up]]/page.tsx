import { SignUp } from "@clerk/nextjs";
 // signup
export default function Page() {
   
  return(
    <div className="h-screen bg-[#121212]  flex justify-center items-center">
    <SignUp path="/sign-up" />
    </div>
  ) 
}