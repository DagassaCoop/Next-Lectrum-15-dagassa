import Link from "next/link";
import Image from "next/image";

const Header = async () => {
    return (
        <nav className="sticky z-[999] w-full py-[10px] h-[60px] bg-white flex items-center justify-between shadow-[0_0.05208in_11.25pt_-9px_rgba(0,0,0,0.1)]">
            <div className="flex justify-between flex-row mx-[3vw] w-full">
                <div>
                    <Link href={`/`} className="block w-[135px] h-[35px]">
                        <Image width={10} height={10} src="/images/logo_title.svg" alt="Logo" className="w-full h-full object-contain" />
                    </Link>
                </div>
                <div className="flex items-center">
                    <Link href="/info" className="flex mr-5 items-center justify-center cursor-pointer text-sm font-medium font-roboto text-white bg-[#83bacd] rounded-[3px] text-center border-0 h-[40px] transition-colors duration-300 ease-in-out m-0 px-[10px] hover:bg-[#5fa6be] max-md:hidden">
                        Info
                    </Link>
                    <Link href="/teacher/courses" className="flex items-center justify-center cursor-pointer text-sm font-medium font-roboto text-white bg-[#83bacd] rounded-[3px] text-center border-0 w-full h-[40px] transition-colors duration-300 ease-in-out m-0 px-[10px] hover:bg-[#5fa6be] max-md:hidden">
                        Create New Course
                    </Link>
                    <Link
                        href={`#`}
                        className="ml-[10px] flex items-center flex-shrink-0 font-medium font-roboto text-[#333] transition-colors duration-300 ease-in-out no-underline hover:text-[rgba(0, 0, 0, 0.5)]"
                    >
                        <span>John Dou</span>
                        <Image
                            width={36}
                            height={36}
                            className="w-[36px] rounded-full border-2 border-white shadow-[0_2px_2px_0_rgba(0,0,0,0.1)] ml-[10px]"
                            src={`/images/avatar.jpg`}
                            alt="Avatar"
                        />
                    </Link>
                    <button type="submit" className="whitespace-nowrap text-sm font-roboto text-[#686f7a] leading-[26px] no-underline flex-shrink-0 ml-[10px] hover:text-black">Log out</button>
                </div>
            </div>
        </nav >
    );
};

export default Header;