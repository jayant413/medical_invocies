import { SignUp } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Page() {
  const { userId } = auth();

  if (userId) {
    redirect("/");
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <SignUp />
    </div>
  );
}
