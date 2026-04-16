import { NextResponse } from "next/server";
import type { DemoResponse } from "@/shared/api";

export async function GET() {
  const response: DemoResponse = {
    message: "Hello from Next.js server",
  };
  return NextResponse.json(response);
}
