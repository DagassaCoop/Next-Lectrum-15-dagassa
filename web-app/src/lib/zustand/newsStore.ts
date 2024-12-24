import { create } from "zustand";
import { News, NewsApiResponse, Source, SourcesApiResponse } from "@/types";

interface INewsStore {
  news: News[];
  sources: Source[];
  fetchNews: (filters: {
    group?: "top-headlines" | "everything";
    q?: string;
    country?: string;
    pageSize?: number;
  }) => Promise<void>;
  fetchSources: () => Promise<void>;
  cleanNews: () => Promise<void>;
}

export const useNewsStore = create<INewsStore>((set) => ({
  news: [],
  sources: [],
  fetchNews: async ({ group = "top-headlines", q, country, pageSize }) => {
    let query = `https://newsapi.org/v2/${group}?`;

    if (q) query += `q=${q}&`;
    if (country) query += `country=${country}&`;
    if (pageSize) query += `pageSize=${pageSize}&`;
    query += `apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;

    try {
      const resNews = await fetch(query);
      const news = ((await resNews.json()) as NewsApiResponse).articles;
      set(() => ({ news }));
    } catch (error) {
      console.log("newsStore > fetchNews > error >> ", error);
    }
  },
  fetchSources: async () => {
    const query = `https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;

    try {
      const resSources = await fetch(query);
      const sources = ((await resSources.json()) as SourcesApiResponse).sources;

      set(() => ({ sources }));
    } catch (error) {
      console.log("newsStore > fetchSources > error >> ", error);
    }
  },
  cleanNews: async () => {
    set(() => ({ news: [] }));
  },
}));
