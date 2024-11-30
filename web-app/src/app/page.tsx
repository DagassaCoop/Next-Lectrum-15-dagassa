import CourseList from "@/src/components/courses/CourseList";
import ProfileInfo from "@/src/components/ProfileInfo";

// Mock
import { mainCourses as courses } from "../mock";

const Home = async () => {
  return (
    <main className="min-h-screen">
      <div className="flex justify-between pt-[40px] pb-[50px] flex-row max-xl:flex-col mx-[3vw] gap-8">
        <section className="w-[75%] max-xl:mb-[40px]">
          <CourseList courses={courses} />
        </section>
        <aside className="w-[25%] max-xl:w-full">
          <ProfileInfo />
        </aside>
      </div>
    </main>
  );
};

export default Home;
