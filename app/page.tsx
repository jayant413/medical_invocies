"use client";
import InvocieTable from "@/components/common/InvocieTable";
import InvoiceForm from "@/components/common/InvoiceForm";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useState } from "react";

export default function Home() {
  const [isForm, setIsForm] = useState(false);
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between ">
      <div className="w-screen flex flex-col justify-center items-center mt-[1em]">
        <div className="w-full flex justify-around mb-[1em]">
          <Button
            variant={isForm ? "outline" : "default"}
            onClick={() => setIsForm(!isForm)}
          >
            {isForm ? "Invoice Table" : "New Invoice"}
          </Button>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        {isForm ? <InvoiceForm setIsForm={setIsForm} /> : <InvocieTable />}
      </div>
    </main>
  );
}
