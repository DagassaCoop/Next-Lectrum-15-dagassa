"use client";
import { ChangeEventHandler, useState } from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

// Entities
import { News, Source } from "@/types";

// Components
import NewsList from "@/components/NewsList";

export default function Home() {
  const { t } = useTranslation("common");

  const sources: Source[] = [];
  const news: News[] = [];

  const [source, setSource] = useState<string>("");
  const [filteredNews, setFilteredNews] = useState(news);

  const handleSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSource(e.target.value);
    setFilteredNews(() => {
      if (e.target.value === "") {
        return news;
      } else {
        return news.filter((item) => item.source.id === e.target.value);
      }
    });
  };

  return (
    <div className="w-full">
      <div className="w-full mb-10 flex justify-center">
        <select
          name="sources"
          id="source-select"
          value={source}
          onChange={handleSelect}
          className="text-black py-2 px-4"
        >
          <option value="">{t("sources")}</option>
          {sources.map((item) => {
            return (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <NewsList news={filteredNews} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};
