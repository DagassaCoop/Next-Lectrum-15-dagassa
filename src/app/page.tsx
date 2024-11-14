import CourseList from "../components/CourseList";
import ProfileInfo from "../components/ProfileInfo";

const Home = async () => {
  return (
    <main className="min-h-screen">
      <div className="flex justify-between pt-[40px] pb-[50px] flex-row max-xl:flex-col mx-[3vw] gap-8">
        <section className="w-[75%] max-xl:mb-[40px]">
          <CourseList />
        </section>
        <aside className="w-[25%] max-xl:w-full">
          <ProfileInfo />
        </aside>
      </div>
    </main>
  );
};

export default Home;
