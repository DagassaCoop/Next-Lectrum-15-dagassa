// Core
import { GetServerSideProps } from "next";
import { useSelector } from "react-redux";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Components
import NewsList from "@/components/NewsList";
// Store
import { RootState, wrapper } from "@/store";
import { fetchBitcoinNews } from "@/store/slices/newSlice";
// Logger
import { logInfo } from "@/lib/logger";

export default function Bitcoin() {
  const news = useSelector((state: RootState) => state.news.subgroups.bitcoin);

  return (
    <div className="w-full">
      <NewsList news={news} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ locale, req }) => {
    logInfo(
      `User visited Bitcoin page from IP: ${
        req.headers["x-forwarded-for"] || req.connection.remoteAddress
      }`
    );

    await store.dispatch(fetchBitcoinNews());

    return {
      props: {
        ...(await serverSideTranslations(locale || "en", ["common"])),
      },
    };
  });
