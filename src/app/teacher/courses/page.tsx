import CourseCard from "@/src/components/courses/CourseCard";
import { teacherCourses } from "@/src/mock";

export default async function CoursesPage() {

  return (
    <section className='py-[50px]'>
      <div className="flex flex-col justify-center items-start mx-[3vw] h-auto">
        <div className="w-full overflow-hidden">
          <h3 className="text-xl font-medium text-left mb-4 text-[#333] mt-9 first:mt-0">My Courses</h3>
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {teacherCourses.map((course) => (
              <CourseCard
                key={course.hash}
                course={course}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
