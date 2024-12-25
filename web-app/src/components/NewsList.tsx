import Image from "next/image";
import Link from "next/link";

// Entities
import { News } from "@/types";

interface NewsListProps {
  news: News[];
}

export default function NewsList({ news }: NewsListProps) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {news.map((item) => {
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
  );
}
