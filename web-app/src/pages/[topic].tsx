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
  topic: string;
}

export default function Topic({ topic }: TopicProps) {
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

  return {
    props: {
      topic: topic,
    },
    revalidate: 84600, // 24h
  };
};
