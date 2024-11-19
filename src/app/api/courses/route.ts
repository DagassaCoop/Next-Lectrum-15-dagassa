import { mainCourses } from "../../../mock";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(mainCourses);
}
