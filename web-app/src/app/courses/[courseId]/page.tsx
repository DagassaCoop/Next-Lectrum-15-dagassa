import CourseDetail from "@/src/components/courses/CourseDetail";
import {mainCourses} from "@/src/mock";

const Course = async ({params}: { params: Promise<{ courseId: string }> }) => {
    const {courseId} = await params;
    const getCourse = mainCourses.find(course => course.hash === courseId)

    if (!getCourse) {
        return (
            <p>Course not found</p>
        )
    }

    return (
        <CourseDetail course={getCourse}/>
    );
};

export default Course