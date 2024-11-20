import { NextResponse } from "next/server";
import { team } from "@/src/mock";

export function GET() {
  return NextResponse.json(team);
}
