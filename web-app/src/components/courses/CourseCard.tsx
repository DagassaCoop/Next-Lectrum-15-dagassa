import { CourseType } from "@/src/types";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }: { course: CourseType }) => {
  return (
    <Link href={`/courses/${course.hash}`}>
      <div className="bg-white w-full p-[10px] rounded-[3px] border border-[#efefef] transition-all duration-200 ease-in-out">
        <div className="relative block w-full h-[11.66vw] max-xl:h-[15.66vw] max-md:h-[22.66vw] max-sm:h-[49.66vw]">
          <Image
            className="w-full h-full object-cover"
            fill
            src={course.poster}
            alt={`Course ${course.hash}`}
          />
          <div className="absolute top-0 left-0 w-full h-full p-[10px] bg-gradient-to-b from-transparent to-[rgba(51,51,51,0.3)] via-transparent">
            <div className="inline-block px-2.5 py-0.5 text-white bg-yellow-400 rounded-sm text-sm font-medium font-roboto">
              {course.rating}
            </div>
            <div className="absolute bottom-2 right-2 px-2.5 py-0.5 text-white bg-gray-800 bg-opacity-80 rounded-sm text-xs font-medium font-roboto">
              {course.duration} hours
            </div>
          </div>
        </div>
        <div className="px-1.25 py-2.5">
          <ul className="flex list-none items-center mb-[10px] text-xs mt-[5px] text-[#686f7a] text-left">
            <li className="text-xs text-[#686f7a]">{course.views} views</li>
            <span className="mx-1">•</span>
            <li className="text-xs text-[#686f7a]">{course.created}</li>
          </ul>
          <div className="block font-semibold font-roboto text-gray-800 text-left mb-1.5 leading-6 no-underline transition-colors duration-300 ease-in-out hover:text-gray-500 ">
            {course.description}
          </div>
          <p className="block text-xs text-[#686f7a] text-left pt-[2px] decoration-inherit transition-colors duration-300 ease-in-out no-underline">
            {course.technologies}
          </p>
          <div className="flex items-end justify-between mt-[17px]">
            <div className="mt-[18px] text-sm float-left text-[#686f7a] text-left leading-6 flex gap-2">
              By{" "}
              <p className="text-gray-800 font-medium no-underline">
                {course.createdBy}
              </p>
            </div>
            <div className="text-lg font-medium text-gray-800 text-right">
              ${course.price}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
