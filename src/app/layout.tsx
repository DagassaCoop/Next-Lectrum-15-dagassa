import Header from '../components/Header';
import { Inter } from "next/font/google";
import '../styles/global.css';
import Footer from '../components/Footer';

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
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
