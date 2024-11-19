import {getBaseURL} from "@/src/lib";
import {NewsType} from "@/src/types";
import Link from "next/link";

export const revalidate=10;

const NewsPage = async ()=>{
    const baseUrl = await getBaseURL()
    const newsData = await fetch(`${baseUrl}/api/news`, {cache: 'no-store'}).then(res=>res.json()) as NewsType[];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Latest News</h1>
                {newsData.map(news => (
                    <Link key={news.id} href={`/news/${news.id}`}>
                        <div key={news.id} className="mb-6 border-2 p-2 rounded-lg">
                            <h2 className="text-2xl font-semibold text-gray-700 mb-2">{news.title}</h2>
                            <p className="text-gray-600">{news.content}</p>
                        </div>
                    </Link>
                ))}
                <p className="text-sm text-gray-500 mt-8 text-center">
                    Page updated every 60 seconds. Last update: {new Date().toLocaleTimeString()}
                </p>
            </div>
        </div>
    );
}


export default NewsPage;