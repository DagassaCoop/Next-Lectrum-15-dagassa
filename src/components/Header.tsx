import Link from "next/link";
import Image from "next/image";

const Header = () => {

  return (
    <nav className="sticky z-[999] w-full py-[10px] h-[60px] bg-white flex items-center justify-between shadow-[0_0.05208in_11.25pt_-9px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between flex-row mx-[3vw] w-full">
        <div>
          <Link href={`/`} className="block w-[135px] h-[35px]">
            <Image width={10} height={10} src="/images/logo_title.svg" alt="Logo" className="w-full h-full object-contain" />
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/news" className="flex mr-5 items-center justify-center cursor-pointer text-sm font-medium font-roboto text-white bg-[#83bacd] rounded-[3px] text-center border-0 h-[40px] transition-colors duration-300 ease-in-out m-0 px-[10px] hover:bg-[#5fa6be] max-md:hidden">
            News
          </Link>
          <Link href="/info" className="flex mr-5 items-center justify-center cursor-pointer text-sm font-medium font-roboto text-white bg-[#83bacd] rounded-[3px] text-center border-0 h-[40px] transition-colors duration-300 ease-in-out m-0 px-[10px] hover:bg-[#5fa6be] max-md:hidden">
            Info
          </Link>
          <button
            className="whitespace-nowrap text-sm font-roboto text-[#686f7a] leading-[26px] no-underline flex-shrink-0 ml-[10px] hover:text-black"
          >
            Log out
          </button>
          <button
            className="whitespace-nowrap text-sm font-roboto text-[#686f7a] leading-[26px] no-underline flex-shrink-0 ml-[10px] hover:text-black"
          >
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
