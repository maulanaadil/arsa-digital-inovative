import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/layouts/header';
import Footer from '@/layouts/footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Arsa Digital Inovative',
  description: 'Arsa Digital Inovative',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
