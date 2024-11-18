import { NewsType } from "../types";

const News = ({ news }: { news: NewsType }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{news.title}</h1>
                <p className="text-gray-600">{news.content}</p>
            </div>
        </div>
    );
}

export default News;
