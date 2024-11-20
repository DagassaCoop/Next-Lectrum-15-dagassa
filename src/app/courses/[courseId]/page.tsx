import { getBaseURL } from "@/src/lib";

import CourseDetail from "@/src/components/CourseDetail";
import { CourseType } from "@/src/types";

const Course = async ({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) => {
  const baseUrl = await getBaseURL();
  const { courseId } = await params;

  const res = await fetch(`${baseUrl}/api/courses/${courseId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <p>Course not found</p>;
  }

  const course = (await res.json()) as CourseType;

  return <CourseDetail course={course} />;
};

export default Course;
