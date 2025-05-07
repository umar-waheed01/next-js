import { user } from "@/app/utils/db";
import { Content } from "next/font/google";
import { NextResponse } from "next/server";

export function GET(request, res){
    const data = user.filter((item) => item.id == res.params.id)
    return NextResponse.json(data)
}