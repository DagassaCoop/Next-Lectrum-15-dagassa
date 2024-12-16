import { GetStaticProps, GetStaticPaths } from "next";

// Components
import NewsList from "@/components/NewsList";

// Mock
import { topics } from "@/mock";

// Queries
import { useNewsByTopic } from "@/queries/topics";

type Params = {
  topic: string;
};

interface TopicProps {
  // news: News[];
  topic: string;
}

export default function Topic({ topic }: TopicProps) {
  // console.log(topic, news);
  const { data: news, isLoading, error } = useNewsByTopic(topic);

  if (isLoading) return <p>Loading news...</p>;
  if (error) return <p>Error loading news</p>;

  return (
    <div className="w-full">
      <div className="text-2xl font-semibold text-center mb-6">
        {topic[0].toUpperCase() + topic.slice(1)} News
      </div>
      {news ? <NewsList news={news} /> : <div>News not found</div>}
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

  // let news: News[] = [];

  // try {
  //   const res = await fetch(
  //     "https://newsapi.org/v2/everything?" +
  //       `q=${topic}&` +
  //       `apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  //   );

  //   if (!res.ok) {
  //     throw new Error("Failed to fetch data");
  //   }

  //   news = ((await res.json()) as NewsApiResponse).articles;
  // } catch (error) {
  //   console.error(error);
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      // news,
      topic: topic,
    },
    revalidate: 84600, // 24h
  };
};
