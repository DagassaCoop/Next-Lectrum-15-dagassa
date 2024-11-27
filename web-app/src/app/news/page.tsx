import NewsList from "@/src/components/news/NewsList";

// Mock
import { news } from "@/src/mock";

export const revalidate = 3600;

const NewsPage = async () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Latest News
        </h1>
        <NewsList news={news} />
        <div className="flex justify-around">
          <p className="text-sm text-gray-500 mt-8 text-center">
            Last update: {new Date().toLocaleTimeString()}
          </p>
          <div className="text-sm text-gray-500 mt-8 text-center flex gap-1"></div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
