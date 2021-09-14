import Link from 'next/link'
import { AppPage } from '@mira/core'
import { Default } from 'layouts'

export default function Error() {
  return (
    <AppPage title="404 | Faisal Karim" layout={Default}>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          404 - Not Found
        </h1>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-100 dark:bg-gray-900 text-center rounded-md text-black dark:text-white">
            Return Home
          </a>
        </Link>
      </div>
    </AppPage>
  )
}
