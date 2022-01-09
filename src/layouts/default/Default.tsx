import { DefaultHeader, DefaultFooter } from './components';

export default function Default({ children }) {
  return (
    <>
      <div className="flex flex-col justify-center px-8">
        <DefaultHeader />
      </div>
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
      >
        {children}
        <DefaultFooter />
      </main>
    </>
  );
}
