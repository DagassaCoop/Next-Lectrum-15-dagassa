import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { i18n } = useTranslation("common");

  const changeLanguage = async (lang: string) => {
    await fetch("api/log", {
      method: "POST",
      body: JSON.stringify({
        message: `User changed language to ${lang}`,
      }),
    });

    router.push(router.pathname, router.asPath, { locale: lang });
  };

  const getLinkClasses = (lang: string) => {
    return [
      "text-sm font-semibold border border-white rounded-md py-2 px-4 hover:scale-105 transition ease-in-out",
      i18n.language === lang ? "bg-white text-black border-none" : "",
    ].join(" ");
  };

  return (
    <div className="flex justify-between items-center gap-4">
      <button
        onClick={() => changeLanguage("en")}
        className={getLinkClasses("en")}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("uk")}
        className={getLinkClasses("uk")}
      >
        Українська
      </button>
    </div>
  );
}
