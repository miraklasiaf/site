import { ThemeProvider } from 'next-themes';
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
