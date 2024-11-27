import CourseDetail from "@/src/components/courses/CourseDetail";

// Mock
import { mainCourses } from "@/src/mock";

export const dynamicParams = false;

export async function generateStaticParams() {
  return mainCourses.map((course) => ({
    courseId: course.hash,
  }));
}

const CoursePage = async ({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) => {
  const { courseId } = await params;
  const course = mainCourses.find((m) => m.hash === courseId);

  if (!course) return <p>Course not found</p>;

  return (
    <div>
      <CourseDetail course={course} />
    </div>
  );
};

export default CoursePage;
