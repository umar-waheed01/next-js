// app/api/hello/route.js
import { user } from "@/app/utils/db";
import { NextResponse } from "next/server";

export function GET(request) {
    return NextResponse.json(user);  
}

export async function POST(request) {
    const body = await request.json();  
    console.log(body.name);
    return NextResponse.json({ name: "umar" });
}
