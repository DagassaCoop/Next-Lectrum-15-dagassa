import NewsList from "@/components/NewsList";
import { News, NewsApiResponse } from "@/types";

interface BitcoinProps {
  news: News[];
}

export default function Bitcoin({ news }: BitcoinProps) {
  return (
    <div className="w-full">
      <NewsList news={news} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const resNews = await fetch(
    "https://newsapi.org/v2/everything?q=bitcoin&" +
      `apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );

  const news = ((await resNews.json()) as NewsApiResponse).articles;

  return {
    props: {
      news,
    },
  };
};
