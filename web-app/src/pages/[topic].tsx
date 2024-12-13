import { GetStaticProps, GetStaticPaths } from "next";

// Entities
import { News, NewsApiResponse } from "@/types";

// Components
import NewsList from "@/components/NewsList";

// Mock
import { topics } from "@/mock";

type Params = {
  topic: string;
};

interface TopicProps {
  news: News[];
  topic: string;
}

export default function Topic({ news, topic }: TopicProps) {
  console.log(topic, news);

  return (
    <div className="w-full">
      <div className="text-2xl font-semibold text-center mb-6">
        {topic[0].toUpperCase() + topic.slice(1)} News
      </div>
      <NewsList news={news} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = topics.map((item) => ({
    params: { topic: item },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<TopicProps> = async (context) => {
  const { topic } = context.params as Params;

  let news: News[] = [];

  try {
    const res = await fetch(
      "https://newsapi.org/v2/everything?" +
        `q=${topic}&` +
        `apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    news = ((await res.json()) as NewsApiResponse).articles;
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      news,
      topic: topic,
    },
    revalidate: 84600, // 24h
  };
};
