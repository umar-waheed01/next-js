import { connectionStr } from "@/app/lib/db";
import { product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(process.env.db)
    const data = await product.find();
    console.log(data)
    return NextResponse.json({result:data})
}