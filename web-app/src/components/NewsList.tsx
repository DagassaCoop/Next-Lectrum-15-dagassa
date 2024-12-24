// Core
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Hooks
import { useNewsStore } from "@/lib/zustand/newsStore";

// Entities
import { News } from "@/types";

interface NewsListProps {
  source?: string;
}

export default function NewsList({ source }: NewsListProps) {
  const news = useNewsStore((state) => state.news);

  const [filteredNews, setFilteredNews] = useState<News[]>(news);

  useEffect(() => {
    if (typeof source === "undefined") {
      setFilteredNews(news);
    } else {
      setFilteredNews(() => {
        if (source === "") {
          return news;
        } else {
          return news.filter((item) => item.source.id === source);
        }
      });
    }
  }, [source, news]);

  return (
    <div className="grid grid-cols-3 gap-6">
      {filteredNews.map((item) => {
        return (
          <div
            key={item.url}
            className="relative border border-white rounded-lg overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-[200px] overflow-hidden">
              {item.urlToImage ? (
                <Image
                  src={item.urlToImage}
                  alt={item.title}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  className="hover:scale-110 transition ease-in-out duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gray-400"></div>
              )}
            </div>
            <div className="bg-white text-black p-4 flex flex-col justify-between flex-1">
              <div className="flex flex-col gap-4 mb-8">
                <h2 className="font-semibold hover:text-blue-500 transition ease-in-out">
                  {item.title}
                </h2>
                <p>{item.publishedAt}</p>
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
  );
}
