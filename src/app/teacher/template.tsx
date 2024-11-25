'use client'

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Template = ({ children }: { children: ReactNode }) => {

  const pathname = usePathname();
  const isActiveLink = (href: string) => pathname === href;
  return (
    <>
      <section className='bg-white pt-10'>
        <div className='flex flex-col justify-center items-start mx-[3vw]'>
          <div className='flex items-end'>
            <Link
              href={'/teacher/about'}
              className={`
                    block text-[#333] bg-transparent border-b-2 border-solid font-medium font-roboto text-sm mt-0 px-6 py-2 cursor-pointer transition duration-300 ease-in-out
                    ${isActiveLink('/teacher/about') ? 'border-[#ed2a26]' : 'border-transparent'}
                `}
              type='button'
            >
              About
            </Link>
            <Link
              href={'/teacher/courses'}
              className={`
                  block text-[#333] bg-transparent border-b-2 border-solid font-medium font-roboto text-sm mt-0 px-6 py-2 cursor-pointer transition duration-300 ease-in-out
                  ${isActiveLink('/teacher/courses') ? 'border-[#ed2a26]' : 'border-transparent'}
                `}
              type='button'
            >
              Courses
            </Link>
          </div>
        </div>
      </section>
      {children}
    </>
  )
};

export default Template;
