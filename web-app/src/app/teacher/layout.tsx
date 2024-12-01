import { ReactNode } from "react";
import Image from "next/image";

const Layout = async ({ children }: { children: ReactNode }) => {

  return (
    <main className="min-h-screen flex-grow">
      <header className="bg-[#333] pt-[40px] pb-[30px]">
        <div className="flex flex-col justify-center items-start mx-[3vw] w-[768px] px-[15px]">
          <div className="flex items-center">
            <div>
              <Image
                width={106}
                height={106}
                quality={100}
                className="w-[110px] h-[110px] rounded-full border-2 border-white border-solid shadow-md mr-[20px]"
                src={'/images/courses/hd_dp.jpg'}
                alt="Avatar"
              />
            </div>
            <div>
              <h2 className="text-white text-2xl font-semibold font-roboto mb-[10px]">John Dou</h2>
              <p className="text-white text-sm font-roboto">
                UI / UX Designer and Web Developer
              </p>
            </div>
          </div>
        </div>
      </header>
      {children}
    </main>
  );
};

export default Layout;
