"use client";

import { useParams } from "next/navigation";

// Components
import CourseDetail from "@/src/components/courses/CourseDetail";

// Hooks
import { useCourseDetails } from "@/src/hooks/useCourseDetails";

const Course = () => {
  const params = useParams<{ courseId: string }>();
  const { data: course, loading } = useCourseDetails({
    courseHash: params.courseId,
  });

  if (loading) return <span>Loading...</span>;

  if (!course) {
    return <p>Course not found</p>;
  }

  return <CourseDetail course={course} />;
};

export default Course;
