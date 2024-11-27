import Link from "next/link";

const Navigation = () => (
  <>
    <Link
      href="/news"
      className="flex mr-5 items-center justify-center cursor-pointer text-sm font-medium font-roboto text-white bg-[#83bacd] rounded-[3px] text-center border-0 h-[40px] transition-colors duration-300 ease-in-out m-0 px-[10px] hover:bg-[#5fa6be] max-md:hidden"
    >
      News
    </Link>
    <Link
      href="/info"
      className="flex mr-5 items-center justify-center cursor-pointer text-sm font-medium font-roboto text-white bg-[#83bacd] rounded-[3px] text-center border-0 h-[40px] transition-colors duration-300 ease-in-out m-0 px-[10px] hover:bg-[#5fa6be] max-md:hidden"
    >
      Info
    </Link>
  </>
);

export default Navigation;
