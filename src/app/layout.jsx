import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/layouts/header';
import Footer from '@/layouts/footer';
import { ApolloWrapper } from './ApolloWrapper';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Arsa Digital Inovative',
  description: 'Arsa Digital Inovative',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <ApolloWrapper>
          <Header />
          {children}
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  );
}
