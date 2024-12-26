// Core
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Entities
import { News } from "@/types";

interface INewsListItemProps {
  news: News;
}

export default function NewsListItem({ news: item }: INewsListItemProps) {
  const [formattedDate, setFormattedDate] = useState(item.publishedAt);

  useEffect(
    () =>
      setFormattedDate(new Date(item.publishedAt).toLocaleDateString("en-US")),
    [item.publishedAt]
  );

  return (
    <div className="relative border border-white rounded-lg overflow-hidden flex flex-col">
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
          <p>{formattedDate}</p>
          <p>{item.description}</p>
        </div>
        <Link href={""} className="font-bold text-lg text-blue-500">
          Read more
        </Link>
      </div>
    </div>
  );
}
