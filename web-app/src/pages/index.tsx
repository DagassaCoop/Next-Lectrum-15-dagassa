"use client";
import { ChangeEventHandler, useState } from "react";
import { GetServerSideProps } from "next";
import { useSelector } from "react-redux";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Store
import { RootState, wrapper } from "@/store";
import { fetchNews, fetchSources } from "@/store/slices/newSlice";
// Entities
import { News, Source } from "@/types";
// Components
import NewsList from "@/components/NewsList";
// Logger
import { logInfo } from "@/lib/logger";

const getUniqSources = (news: News[], allSources: Source[]) => {
  const uniqSourceIds = new Set(news.map((item) => item.source.id));

  const sources: Source[] = [];
  uniqSourceIds.forEach((item) => {
    const source = allSources.find((subitem) => subitem.id === item);
    if (source) sources.push(source);
  });

  return sources;
};

export default function Home() {
  const allSources = useSelector((state: RootState) => state.news.sources);
  const news = useSelector((state: RootState) => state.news.news);
  const status = useSelector((state: RootState) => state.news.status);

  const sources = getUniqSources(news, allSources);
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

  if (status === "loading") {
    return <p>Loading transactions...</p>;
  }

  if (status === "failed") {
    return <p>Failed to load transactions. Please try again later.</p>;
  }

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
          <option value="">All sources</option>
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

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ locale, req }) => {
    logInfo(
      `User visited Home page from IP: ${
        req.headers["x-forwarded-for"] || req.connection.remoteAddress
      }`
    );

    await store.dispatch(fetchNews());
    await store.dispatch(fetchSources());

    return {
      props: {
        ...(await serverSideTranslations(locale || "en", ["common"])),
      },
    };
  });
