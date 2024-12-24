// Components
import NewsList from "@/components/NewsList";
import { News } from "@/types";

export default function Bitcoin() {
  const news: News[] = [];

  return (
    <div className="w-full">
      <NewsList news={news} />
    </div>
  );
}
