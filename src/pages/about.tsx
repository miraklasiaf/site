import { AppPage } from '@mira/core'
import { Default } from 'layouts'

export default function AboutPage() {
  return (
    <AppPage title="About | Faisal Karim" layout={Default}>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 mr-6 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>Hi, I'm Faisal. I live in Batam, Indonesia and I’m a Software Engineer.</p>
          <p>
            I grew up in small-town Batam and went to Riau University at Pekanbaru, graduating with
            a degree in Computer Science. I spend my free time listening music, playing games, and
            enjoying time with friends and family.
          </p>
        </div>
      </div>
    </AppPage>
  )
}
