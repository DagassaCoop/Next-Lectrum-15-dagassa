import { CourseType } from "@/src/types";
import Image from "next/image";
import Link from "next/link";
import LikeButton from "../LikeButton";
import CommentSection from "../CommentSection";
const CourseDetail = ({ course }: { course: CourseType }) => {
  return (
    <main>
      <section className="bg-gray-800 py-8">
        <div className="flex flex-col justify-center items-start mx-[10vw] h-auto">
          <div className="flex flex-row max-md:flex-col max-md:items-center">
            <div className="w-[32%] mr-[30px] max-md:w-[70%] max-md:mx-auto max-md:mb-5">
              <div className="bg-white w-full p-2 rounded border border-gray-200 transition-all duration-200 ease-in-out">
                <Link
                  href="#"
                  className="relative block w-full h-[16.3vw] max-xl:h-[16.3vw] max-md:h-[35.3vw]"
                >
                  <Image
                    className="w-full h-full object-cover"
                    width={300}
                    height={190}
                    src={`${course.poster}`}
                    alt={`Course ${course.hash}`}
                  />
                  <div className="absolute inset-0 w-full h-full p-2 bg-gradient-to-b from-transparent to-[rgba(51,51,51,0.3)_90%]">
                    <div className="absolute top-[10px] right-0 z-[2] px-[10px] py-[2px] bg-[#fa8305] text-white text-[10px] font-roboto font-semibold leading-[1.5] text-center uppercase rounded-[3px] rounded-tr-none rounded-br-none shadow-[0_0_1px_1px_rgba(20,23,28,0.1),0_3px_1px_0_rgba(20,23,28,0.1)]">
                      {"Bestseller".toUpperCase()}
                    </div>
                    <div className="text-white bg-[#fdcc0d] inline-block px-2.5 py-0.5 rounded text-sm font-medium">
                      {course.rating}
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 text-white bg-[rgba(51,51,51,0.8)] inline-block px-2.5 py-0.5 rounded text-xs font-medium font-roboto">
                      {course.duration} hours
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-[66%] max-md:w-full max-md:mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-[15px] max-md:items-center">
                {course.description}
              </h3>
              <p className="text-sm text-[#f7f7f7] text-left leading-6 mb-5 max-md:items-center">
                {course.technologies}
              </p>
              <div className="flex items-center text-sm text-white text-left mb-5 max-md:items-center">
                <div className="text-white bg-[#fdcc0d] inline-block px-2.5 py-0.5 rounded text-sm font-medium mr-2.5 max-md:items-center">
                  {course.rating}
                </div>
              </div>
              <div className="text-sm text-white text-left mb-5 max-md:items-center">
                English
              </div>
              <div className="text-sm text-white text-left mb-5 max-md:items-center">
                Last updated {course.created}
              </div>
              <div className="flex justify-between items-center py-4">
                <LikeButton />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white pt-[20px] pb-[35px]">
        <div className="flex flex-col justify-center items-start mx-[10vw]">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center flex-shrink-0 text-base font-medium text-gray-800 no-underline transition-colors duration-300 ease-in-out hover:text-black/50">
                <Image
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-white shadow-[0_2px_2px_0_rgba(0,0,0,0.1)] w-[50px] h-[50px] ml-0 mr-[10px]"
                  src={"/images/avatar.jpg"}
                  alt=""
                />
                <span>{course.createdBy}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[50px]">
        <div className="flex flex-col justify-center items-start mx-[10vw] h-auto">
          <h3 className="text-lg font-medium font-roboto text-left mb-4 text-gray-800">
            Requirements
          </h3>
          <ul className="list-none">
            <div className="flex items-center">
              <div className="relative h-full">
                <span className="block w-0.5 h-0.5 border border-solid border-gray-500 absolute top-[-3px] left-0 transform -translate-y-1/2" />
              </div>
              <li className="pl-[20px] text-sm text-gray-600 text-left leading-[26px] no-underline mb-1 relative">
                Development
              </li>
            </div>
            <div className="flex items-center">
              <div className="relative h-full">
                <span className="block w-0.5 h-0.5 border border-solid border-gray-500 absolute top-[-3px] left-0 transform -translate-y-1/2" />
              </div>
              <li className="pl-[20px] text-sm text-gray-600 text-left leading-[26px] no-underline mb-1 relative">
                JavaScript
              </li>
            </div>
          </ul>
          <h3 className="text-lg font-medium font-roboto text-left mb-4 text-gray-800 mt-[30px]">
            Descriptions
          </h3>
          <ul className="list-none">
            <div className="flex items-center">
              <div className="relative h-full">
                <span className="block w-0.5 h-0.5 border border-solid border-gray-500 absolute top-[-3px] left-0 transform -translate-y-1/2" />
              </div>
              <li className="pl-[20px] text-sm text-gray-600 text-left leading-[26px] no-underline mb-1 relative">
                The Complete JavaScript Course 2020: Build Real Projects!
              </li>
            </div>
          </ul>
          <p className="text-sm font-normal font-roboto text-gray-600 text-left mb-4 mt-4 leading-[26px]">
            Throughout the course we cover tons of tools and technologies
            including:
          </p>
        </div>
        <div className="flex mx-[10vw] h-auto">
          <CommentSection />
        </div>
      </section>
    </main>
  );
};

export default CourseDetail;
