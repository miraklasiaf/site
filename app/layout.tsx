import './global.css';
import { Atkinson_Hyperlegible } from 'next/font/google';
import Footer from '../components/footer';
import Header from '../components/header';
import { Providers } from './providers';
export * from './metadata';

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={atkinsonHyperlegible.className}>
      <body className="antialiased bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
        <Providers>
          <div className="flex flex-col justify-center px-8">
            <Header />
          </div>
          <main id="skip" className="flex flex-col justify-center px-8">
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
