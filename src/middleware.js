import { NextResponse } from "next/server";

export default function middleware(req) {
  const { pathname } = req.nextUrl;
  console.log("Middleware Path : ", pathname);
  return NextResponse.next();
}
