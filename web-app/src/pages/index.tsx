// Core
import { ChangeEventHandler, useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

// Entities
import { Source, News } from "@/types";
// Components
import NewsList from "@/components/NewsList";
// Hooks
import { useNewsStore } from "@/lib/zustand/newsStore";

const getNewsUniqueSources = (news: News[], sources: Source[]) => {
  const uniqSourceIds = new Set(news.map((item) => item.source.id));

  const uniqSources: Source[] = [];
  uniqSourceIds.forEach((item) => {
    const source = sources.find((subitem) => subitem.id === item);
    if (source) uniqSources.push(source);
  });

  return uniqSources;
};

export default function Home() {
  const { t } = useTranslation("common");

  const news = useNewsStore((state) => state.news);
  const allSources = useNewsStore((state) => state.sources);

  const [sources, setSources] = useState<Source[]>([]);
  const [source, setSource] = useState<string>("");

  useEffect(() => {
    useNewsStore.getState().fetchNews({ country: "us", pageSize: 100 });
    useNewsStore.getState().fetchSources();
  }, []);

  useEffect(() => {
    if (news.length !== 0 && allSources.length !== 0 && sources.length === 0) {
      const sources = getNewsUniqueSources(news, allSources);
      setSources(sources);
    }
  }, [news, allSources]);

  const handleSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSource(e.target.value);
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null; // return this null to avoid hydration errors
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
          <option value="">{t("sources")}</option>
          {sources.map((item) => {
            return (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <NewsList source={source} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};
