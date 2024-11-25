import Link from "next/link";
import Image from "next/image";

const ProfileInfo = async () => {

  return (
    <div className="sticky p-10 top-[40px] bg-white w-full rounded border border-gray-200 transition-all duration-200 ease-in-out text-center">
      <Image
        src={`/images/courses/hd_dp.jpg`}
        width={110}
        height={110}
        className="w-25 h-25 inline-block rounded-full border-2 border-white shadow-[0px_2px_2px_0px_rgba(0,0,0,0.1)] mb-5"
        alt=""
      />
      <p className="font-medium text-gray-800 text-center relative mb-4.5">
        <Link href={`/teacher/about`} prefetch>
          John Dou
        </Link>
      </p>
      <p className="text-xs text-gray-600 mb-[18px] truncate">Web Developer, Designer, and Teacher</p>
      <ul className="flex list-none text-center justify-center flex-wrap text-[#686f7a] text-xs">
        <li>615K Students</li>
        <span className="mx-1">•</span>
        <li>12 Courses</li>
      </ul>
      <Link
        className="text-sm font-medium text-gray-800 text-center leading-6 no-underline bg-transparent transition-all duration-300 ease-in-out mt-4 block hover:text-[#004a99]"
        href={`/teacher/about`}
        prefetch
      >
        Go To Profile
      </Link>
    </div>
  );
};

export default ProfileInfo;
