import { mainCourses } from '@/src/mock';
import { NextResponse } from 'next/server';

export async function GET() {
  // Get data from DB
  return NextResponse.json(mainCourses);
}
