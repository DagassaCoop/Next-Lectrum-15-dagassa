// Entities
import { News } from "@/types";
// Components
import NewsListItem from "./NewsListItem";

interface NewsListProps {
  news: News[];
}

export default function NewsList({ news }: NewsListProps) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {news.map((item, index) => {
        return <NewsListItem news={item} key={index} />;
      })}
    </div>
  );
}
