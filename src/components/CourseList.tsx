import { mainCourses } from "../mock";
import CourseCard from "./CourseCard";

const CourseList = () => {

  return (
    <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
      {mainCourses?.map((course) => (
        <CourseCard
          key={course.hash}
          course={course}
        />
      ))}
    </div>
  );
};

export default CourseList;
