import path from "path";

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
