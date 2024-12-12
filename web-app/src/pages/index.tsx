"use client";

import { GetServerSideProps } from "next";
import { ChangeEventHandler, useState } from "react";

// Entities
import { News, NewsApiResponse, Source, SourcesApiResponse } from "@/types";

// Components
import NewsList from "@/components/NewsList";

interface HomeProps {
  sources: Source[];
  news: News[];
}

export default function Home({ news, sources }: HomeProps) {
  const [source, setSource] = useState<string>("");
  const [filteredNews, setFilteredNews] = useState(news);

  console.log(process.env.NEXT_PUBLIC_NEWS_API_KEY);

  const handleSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    console.log(e.target.value);
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

export const getServerSideProps: GetServerSideProps = async () => {
  // Sources
  const resSources = await fetch(
    "https://newsapi.org/v2/top-headlines/sources?country=us&" +
      `apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );
  const sourcesAll: Source[] = ((await resSources.json()) as SourcesApiResponse)
    .sources;

  // News
  const resNews = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&pageSize=100&" +
      `apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );
  const news: News[] = ((await resNews.json()) as NewsApiResponse).articles;

  const uniqSourceIds = new Set(news.map((item) => item.source.id));

  const sources: Source[] = [];
  uniqSourceIds.forEach((item) => {
    const source = sourcesAll.find((subitem) => subitem.id === item);
    if (source) sources.push(source);
  });

  return {
    props: {
      sources,
      news,
    },
  };
};
