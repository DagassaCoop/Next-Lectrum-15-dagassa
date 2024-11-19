import CourseCard from "./CourseCard";
import { getBaseURL } from "../lib";
import { CourseType } from "../types";

const CourseList = async () => {
  const baseUrl = await getBaseURL();
  const courses = (await fetch(`${baseUrl}/api/courses`).then((res) =>
    res.json()
  )) as CourseType[];

  return (
    <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
      {courses?.map((course) => (
        <CourseCard key={course.hash} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
