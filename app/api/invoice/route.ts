import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId } = auth();
    const { date, invoice, taxable, gross } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const newInvoice = await prismadb.invoice.create({
      data: {
        userId: userId,
        date: new Date(date),
        invoice,
        taxable,
        gross,
      },
    });

    return NextResponse.json(newInvoice, { status: 200 });
  } catch (error) {
    console.log("[STORES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}


export async function GET(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const userInvoices = await prismadb.invoice.findMany({
      where: { userId },
      orderBy: { date: 'desc' }
    });

    return NextResponse.json(userInvoices, { status: 200 });
  } catch (error) {
    console.log("[INVOICES_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}