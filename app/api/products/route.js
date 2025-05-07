import { connectionStr } from "@/app/lib/db";
import { product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(process.env.db);
  const data = await product.find();
  console.log(data);
  return NextResponse.json({ result: data });
}

export async function POST(request) {
  try {
    const payload = await request.json();

    await mongoose.connect(process.env.db);
    const newProduct = new product(payload);
    const result = await newProduct.save();

    return NextResponse.json({ result, success: true });
  } catch (error) {
    console.error("POST /api error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
