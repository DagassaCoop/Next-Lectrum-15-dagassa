// Core
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";

// Components
import NewsList from "@/components/NewsList";

// Hooks
import { useNewsStore } from "@/lib/zustand/newsStore";

export default function Bitcoin() {
  useEffect(() => {
    useNewsStore.getState().fetchNews({ group: "everything", q: "bitcoin" });
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null; // return this null to avoid hydration errors
  }

  return (
    <div className="w-full">
      <NewsList />
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
