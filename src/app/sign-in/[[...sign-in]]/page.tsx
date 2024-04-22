import { SignIn } from "@clerk/nextjs";
 // loginin
export default function Page() {
  return(
    <div className="h-screen bg-[#121212]  flex justify-center items-center">
    <SignIn path="/sign-in" />
    </div>
  );
}