import { AppPage, AppProjectCard } from '@mira/core'
import { Default } from 'layouts'

export default function HomePage() {
  return (
    <AppPage title="Faisal Karim" layout={Default}>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Faisal Karim
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I'm a software engineer living in Batam, Indonesia. You’ve found my personal slice of the
          internet – everything you want to know and more is here.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h3>
        <AppProjectCard
          title="Grammarkup"
          description="A web for learning english grammar."
          href="https://grammarkup.vercel.app/"
          icon="grammarkup"
        />
        <AppProjectCard
          title="miraklasiaf.com"
          description="Personal website / portfolio / blog."
          href="https://miraklasiaf.com/"
          icon="miraklasiaf"
        />
      </div>
    </AppPage>
  )
}
