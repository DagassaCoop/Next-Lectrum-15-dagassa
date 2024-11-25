import News from '@/src/components/News';
import { getBaseURL } from '@/src/lib';
import { NewsType } from '@/src/types';

export const dynamicParams = false;

const NewsPage = async ({ params }: { params: Promise<{ newsId: string }> }) => {
  const {newsId} = await params;
  const baseUrl = await getBaseURL();
  const res = await fetch(`${baseUrl}/api/news/${newsId}`, { cache: 'no-store' });

  if (!res.ok) {
    return <p>News not found</p>;
  }

  const news = await res.json() as NewsType;

  return (
    <div>
      <News news={news} />
    </div>
  );
};

export default NewsPage;