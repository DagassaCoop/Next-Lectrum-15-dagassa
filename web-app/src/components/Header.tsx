"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Actions
import { signout } from "@/app/actions/signout";

const navLinks: {
  title: string;
  path: string;
}[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Profile",
    path: "/profile",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

export default function Header() {
  const pathname = usePathname();

  if (pathname.startsWith("/auth")) return null;

  return (
    <header className="flex justify-between items-center h-[60px] px-10">
      <div className="flex gap-6">
        {navLinks.map((item, index) => {
          return (
            <Link href={item.path} key={index}>
              {item.title}
            </Link>
          );
        })}
      </div>
      <button onClick={() => signout()}>Log out</button>
    </header>
  );
}
