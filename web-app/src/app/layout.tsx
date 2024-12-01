import { Inter } from "next/font/google";
import '../styles/global.css';
import Footer from "../components/Footer";
import Header from "@/src/components/header/Header";
import { ApolloWrapper } from "../lib/apolloProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Cursus Platform',
  description: 'A platform for learning and teaching',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ApolloWrapper>{children}</ApolloWrapper>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
