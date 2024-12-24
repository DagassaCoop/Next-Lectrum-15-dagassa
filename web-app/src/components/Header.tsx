"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "next-i18next";

// Components
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const pathname = usePathname();
  const { t } = useTranslation("common");

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
            {t("home")}
          </Link>
          <Link href="/bitcoin" className={getLinkClasses("/bitcoin")}>
            {t("bitcoin")}
          </Link>
        </div>
      </div>
      <LanguageSwitcher />
    </header>
  );
}
