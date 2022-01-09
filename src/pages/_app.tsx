import { ThemeProvider } from 'next-themes';
import { useGa } from '@mira/hooks';
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  useGa();

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
