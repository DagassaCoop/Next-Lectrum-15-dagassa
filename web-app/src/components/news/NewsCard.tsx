import { NewsType } from "@/src/types";
import Link from "next/link";

export const NewsCard = ({ news }: { news: NewsType }) => {
  return (
    <Link key={news.id} href={`/news/${news.id}`}>
      <div key={news.id} className="mb-6 border-2 p-2 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          {news.title}
        </h2>
        <p className="text-gray-600">{news.content}</p>
      </div>
    </Link>
  );
};
