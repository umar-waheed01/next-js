import { NextResponse } from "next/server"

export function middleware(request){
  console.log("Middleware is running")

  return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher:["/students/:students*"]
}