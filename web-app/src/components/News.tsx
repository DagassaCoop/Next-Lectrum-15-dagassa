import { NewsType } from "@/src/types";
import LikeButton from "./LikeButton";
import CommentSection from "./CommentSection";

const News = ({ news }: { news: NewsType }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col items-center py-10">
      <div className="bg-white shadow-2xl rounded-lg p-10 max-w-2xl w-full">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">
          {news.title}
        </h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          {news.content}
        </p>

        <div className="flex justify-between items-center py-4 border-t border-gray-300">
          <LikeButton />
        </div>

        <div className="border-t mt-8 pt-8">
          <CommentSection />
        </div>
      </div>
    </div>
  );
};

export default News;
