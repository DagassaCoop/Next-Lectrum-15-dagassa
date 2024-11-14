import {teacherCourses} from "@/mock";
import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {

    return (
        <section className='py-[50px]'>
            <div className="flex flex-col justify-center items-start mx-[3vw] h-auto">
                <div className="w-full overflow-hidden">
                    <h3 className="text-xl font-medium text-left mb-4 text-[#333] mt-9 first:mt-0">My Courses</h3>
                    <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
                        {teacherCourses.map((course) => (
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
                </div>
            </div>
        </section>
    );
}