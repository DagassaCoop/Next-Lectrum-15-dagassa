"use client";

// Components
import CourseCard from "./CourseCard";

// Hooks
import { useCourses } from "@/src/hooks/useCourses/useCourses.client";

export const revalidate = 10;

const CourseList = () => {
  const { data: courses, loading } = useCourses({ page: 0, limit: 10 });

  if (loading) return <span>Loading...</span>;

  return (
    <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
      {courses?.map((course) => (
        <CourseCard key={course.hash} course={course} />
      ))}
      <p className="text-sm text-gray-500 mt-8 text-center">
        Page updated every 60 seconds. Last update:{" "}
        {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
};

export default CourseList;
