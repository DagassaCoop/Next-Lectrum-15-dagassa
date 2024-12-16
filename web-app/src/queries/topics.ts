import { NewsApiResponse, News } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useNewsByTopic = (topic: string) => {
  return useQuery({
    queryKey: ["news", topic],
    queryFn: async () => {
      const res = await fetch(
        "https://newsapi.org/v2/everything?" +
          `q=${topic}&` +
          `apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const news: News[] = ((await res.json()) as NewsApiResponse).articles;
      return news;
    },
  });
};
