import CourseDetail from "@/src/components/CourseDetail";
import { mainCourses } from "@/src/mock";

const Course = ({params}: { params: { courseId: string } }) => {
  const getCourse = mainCourses.find(course => course.hash === params.courseId)

  if(!getCourse) {
      return(
        <p>Course not found</p>
      )
  }

  return (
        <CourseDetail course={getCourse} />
    );
};

export default Course