// Core
import { GetStaticProps, GetStaticPaths } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<TopicProps> = async ({
  params,
  locale,
}) => {
  const { topic } = params as Params;

  return {
    props: {
      topic: topic,
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
    revalidate: 84600, // 24h
  };
};
