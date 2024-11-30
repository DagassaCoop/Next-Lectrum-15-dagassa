"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const AdminLink = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access-tokens="));
    setIsAuthenticated(!!token);
  }, []);

  return isAuthenticated ? (
    <Link
      href="/admin"
      className="flex mr-5 items-center justify-center cursor-pointer text-sm font-medium font-roboto text-white bg-[#83bacd] rounded-[3px] text-center border-0 h-[40px] transition-colors duration-300 ease-in-out m-0 px-[10px] hover:bg-[#5fa6be] max-md:hidden"
    >
      Admin
    </Link>
  ) : null;
};

export default AdminLink;
