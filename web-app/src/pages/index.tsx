"use client";

import { GetServerSideProps } from "next";
import { ChangeEventHandler, useState } from "react";

// Entities
import { News, NewsApiResponse, Source, SourcesApiResponse } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface HomeProps {
  sources: Source[];
  news: News[];
}
const API = "1783adec1406491fbce92d4b0d9411da";

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
    <div className="w-full py-6 px-10">
      <main>
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
        <div className="grid grid-cols-3 gap-6">
          {filteredNews.map((item) => {
            return (
              <div
                key={item.url}
                className="relative border border-white rounded-lg overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-[200px] overflow-hidden mb-4">
                  <Image
                    src={item.urlToImage!}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-110 transition ease-in-out duration-500"
                  />
                </div>
                <div className="bg-white text-black p-4 flex flex-col justify-between flex-1">
                  <div className="flex flex-col gap-4 mb-8">
                    <h2 className="font-semibold hover:text-blue-500 transition ease-in-out">
                      {item.title}
                    </h2>
                    <p>{new Date(item.publishedAt).toLocaleDateString()}</p>
                    <p>{item.description}</p>
                  </div>
                  <Link href={""} className="font-bold text-lg text-blue-500">
                    Read more
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Sources
  const resSources = await fetch(
    "https://newsapi.org/v2/top-headlines/sources?country=us&" +
      `apiKey=${process.env.NEWS_API_KEY ?? API}`
  );
  const sourcesAll: Source[] = ((await resSources.json()) as SourcesApiResponse)
    .sources;

  // News
  const resNews = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&pageSize=100&" +
      `apiKey=${process.env.NEWS_API_KEY ?? API}`
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
