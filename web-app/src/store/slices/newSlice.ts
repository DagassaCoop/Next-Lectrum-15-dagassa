import { News, NewsApiResponse, Source, SourcesApiResponse } from "@/types";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface NewsSlice {
  news: News[];
  sources: Source[];
  subgroups: {
    bitcoin: News[];
  };
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: NewsSlice = {
  news: [],
  sources: [],
  subgroups: {
    bitcoin: [],
  },
  status: "idle",
};

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const resNews = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&pageSize=100&" +
      `apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );
  const news: News[] = ((await resNews.json()) as NewsApiResponse).articles;
  return news;
});

export const fetchSources = createAsyncThunk("news/fetchSources", async () => {
  const resSources = await fetch(
    "https://newsapi.org/v2/top-headlines/sources?country=us&" +
      `apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );
  const sources: Source[] = ((await resSources.json()) as SourcesApiResponse)
    .sources;
  return sources;
});

export const fetchBitcoinNews = createAsyncThunk(
  "news/fetchBitcoinNews",
  async () => {
    const resNews = await fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&" +
        `apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );

    const news = ((await resNews.json()) as NewsApiResponse).articles;
    return news;
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action: PayloadAction<News[]>) => {
        state.status = "succeeded";
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(
        fetchSources.fulfilled,
        (state, action: PayloadAction<Source[]>) => {
          state.sources = action.payload;
        }
      )
      .addCase(
        fetchBitcoinNews.fulfilled,
        (state, action: PayloadAction<News[]>) => {
          state.subgroups.bitcoin = action.payload;
        }
      );
  },
});

export const {} = newsSlice.actions;

export default newsSlice.reducer;
