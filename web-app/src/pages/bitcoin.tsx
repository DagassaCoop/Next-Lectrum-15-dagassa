// import { GetServerSideProps } from "next";
// import { useSelector } from "react-redux";

// Components
import NewsList from "@/components/NewsList";
import { News } from "@/types";

// Store
// import { RootState, wrapper } from "@/store";
// import { fetchBitcoinNews } from "@/store/slices/newSlice";

export default function Bitcoin() {
  // const news = useSelector((state: RootState) => state.news.subgroups.bitcoin);
  const news: News[] = [];

  return (
    <div className="w-full">
      <NewsList news={news} />
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps =
//   wrapper.getServerSideProps((store) => async () => {
//     await store.dispatch(fetchBitcoinNews());

//     return {
//       props: {},
//     };
//   });
