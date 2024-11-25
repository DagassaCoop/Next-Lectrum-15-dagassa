import NewsList from "@/src/components/news/NewsList";
import { getBaseURL } from "@/src/lib";
import { NewsType } from "@/src/types";

export const revalidate = 3600;

const NewsPage = async () => {
  const baseUrl = await getBaseURL();
  const newsData = await fetch(`${baseUrl}/api/news`, { cache: 'no-store' }).then(res => res.json()) as NewsType[]

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Latest News</h1>
        <NewsList news={newsData} />
        <div className="flex justify-around">
          <p className="text-sm text-gray-500 mt-8 text-center">
            Last update: {new Date().toLocaleTimeString()}
          </p>
          <div className="text-sm text-gray-500 mt-8 text-center flex gap-1">
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;