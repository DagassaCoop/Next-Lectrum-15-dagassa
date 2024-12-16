"use client";
import { ChangeEventHandler, useState } from "react";
import { GetServerSideProps } from "next";
import { useSelector } from "react-redux";

// Store
import { RootState, wrapper } from "@/store";
import { fetchNews, fetchSources } from "@/store/slices/newSlice";

// Entities
import { Source } from "@/types";

// Components
import NewsList from "@/components/NewsList";

export default function Home() {
  const sources = useSelector((state: RootState) => {
    const uniqSourceIds = new Set(
      state.news.news.map((item) => item.source.id)
    );

    const sources: Source[] = [];
    uniqSourceIds.forEach((item) => {
      const source = state.news.sources.find((subitem) => subitem.id === item);
      if (source) sources.push(source);
    });
    return sources;
  });
  const news = useSelector((state: RootState) => state.news.news);
  const status = useSelector((state: RootState) => state.news.status);

  const [source, setSource] = useState<string>("");
  const [filteredNews, setFilteredNews] = useState(news);

  const handleSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSource(e.target.value);
    setFilteredNews(() => {
      if (e.target.value === "") {
        return news;
      } else {
        return news.filter((item) => item.source.id === e.target.value);
      }
    });
  };

  if (status === "loading") {
    return <p>Loading transactions...</p>;
  }

  if (status === "failed") {
    return <p>Failed to load transactions. Please try again later.</p>;
  }

  return (
    <div className="w-full">
      <div className="w-full mb-10 flex justify-center">
        <select
          name="sources"
          id="source-select"
          value={source}
          onChange={handleSelect}
          className="text-black py-2 px-4"
        >
          <option value="">All sources</option>
          {sources.map((item) => {
            return (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <NewsList news={filteredNews} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    await store.dispatch(fetchNews());
    await store.dispatch(fetchSources());

    return {
      props: {},
    };
  });
