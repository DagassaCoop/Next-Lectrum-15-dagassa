import { mainCourses } from "../mock";
import CourseCard from "./CourseCard";

const CourseList = () => {

  return (
    <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
      {mainCourses.map((course) => (
        <CourseCard
          key={course.hash}
          hash={course.hash}
          badge={course.badge}
          rating={course.rating}
          poster={course.poster}
          duration={course.duration}
          views={course.views}
          createdBy={course.createdBy}
          price={course.price}
          created={course.created}
          description={course.description}
          technologies={course.technologies}
        />
      ))}
    </div>
  );
};

export default CourseList;
