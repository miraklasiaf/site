import { DefaultHeader, DefaultFooter } from './components'

export default function Default({ children }) {
  return (
    <div>
      <DefaultHeader />
      <main id="skip" className="flex flex-col justify-center px-8 bg-white dark:bg-black">
        {children}
        <DefaultFooter />
      </main>
    </div>
  )
}
