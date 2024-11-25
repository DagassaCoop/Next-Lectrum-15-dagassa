import {mainCourses} from '@/src/mock';
import {NextResponse} from 'next/server';

export async function GET(req: Request, {params}: { params: Promise<{ courseId: string }> }) {
    const {courseId} = await params;
    const course = mainCourses.find(course => course.hash === courseId);

    if (!course) {
        return NextResponse.json({message: 'Course not found'}, {status: 404});
    }

    return NextResponse.json(course);
}
