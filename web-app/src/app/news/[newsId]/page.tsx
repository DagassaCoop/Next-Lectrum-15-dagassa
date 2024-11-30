import News from "@/src/components/News";

// Mock
import { news as mockNews } from "@/src/mock";

export async function generateStaticParams() {
  return mockNews.map((item) => {
    return {
      newsId: item.id,
    };
  });
}

export const dynamicParams = false;

const NewsPage = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;
  const news = mockNews.find((n) => n.id === newsId);

  if (!news) return <p>News not found</p>;

  return (
    <div>
      <News news={news} />
    </div>
  );
};

export default NewsPage;
