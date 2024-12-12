"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Mock
import { topics } from "@/mock";

export default function Header() {
  const pathname = usePathname();

  const getLinkClasses = (path: string) => {
    return [
      "font-semibold border border-white rounded-md py-2 px-4 hover:scale-105 transition ease-in-out",
      pathname === path ? "bg-white text-black border-none" : "",
    ].join(" ");
  };

  return (
    <header className="w-full flex justify-center mb-10">
      <div className="m-auto py-4 grid gap-8">
        <div className="flex justify-center gap-6">
          <Link href="/" className={getLinkClasses("/")}>
            Home
          </Link>
          <Link href="/bitcoin" className={getLinkClasses("/bitcoin")}>
            Bitcoin
          </Link>
        </div>
        <div className="flex justify-center items-center gap-6">
          {topics.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/topics/${item}`}
                className={getLinkClasses(`/topics/${item}`)}
              >
                {item[0].toLocaleUpperCase() + item.slice(1)}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
