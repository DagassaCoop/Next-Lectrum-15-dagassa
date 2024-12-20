import path from "path";
console.log(path.resolve("./public/locales"));

/** @type {import('next-i18next').UserConfig} */
const i18nConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "uk"],
  },
  localePath:
    typeof window === "undefined"
      ? path.resolve("./public/locales")
      : "/public/locales",
};

export default i18nConfig;
