"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const LINKS: {
  title: string;
  path: string;
}[] = [
  {
    title: "Courses",
    path: "/teacher/courses",
  },
  {
    title: "About",
    path: "/teacher/about",
  },
];

const Template = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isActiveLink = (href: string) => pathname === href;
  return (
    <>
      <section className="bg-white pt-10">
        <div className="flex flex-col justify-center items-start mx-[3vw]">
          <div className="flex items-end">
            {LINKS.map((l, index) => {
              return (
                <Link
                  key={index}
                  href={l.path}
                  className={`
                  block text-[#333] bg-transparent border-b-2 border-solid font-medium font-roboto text-sm mt-0 px-6 py-2 cursor-pointer transition duration-300 ease-in-out
                  ${
                    isActiveLink(l.path)
                      ? "border-[#ed2a26]"
                      : "border-transparent"
                  }
                `}
                >
                  {l.title}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      {children}
    </>
  );
};

export default Template;
