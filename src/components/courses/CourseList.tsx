import { getBaseURL } from "@/src/lib";
import { CourseType } from "@/src/types";
import CourseCard from "./CourseCard";

export const revalidate = 10;

const CourseList = async () => {
    const baseUrl = await getBaseURL();
    const courses = await fetch(`${baseUrl}/api/courses`, { cache: 'no-store' }).then(res => res.json()) as CourseType[]

  return (
    <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
      {courses?.map((course) => (
        <CourseCard
          key={course.hash}
          course={course}
        />
      ))}
      <p className="text-sm text-gray-500 mt-8 text-center">
        Page updated every 60 seconds. Last update: {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
};

export default CourseList;