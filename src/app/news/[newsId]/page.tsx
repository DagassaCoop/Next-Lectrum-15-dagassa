import News from "@/src/components/News";
import { getBaseURL } from "@/src/lib";
import { news } from "@/src/mock";

export const dynamicParams = false;

export async function generateStaticParams() {
  return news.map((news) => ({
    newsId: news.id,
  }));
}

const NewsPage = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;
  const baseUrl = await getBaseURL();
  console.log("baseUrl", baseUrl);
  console.log("newsId", newsId);

  const res = await fetch(`${baseUrl}/api/news/${newsId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <p>News not found</p>;
  }

  const news = await res.json();

  return <News news={news} />;
};

export default NewsPage;
