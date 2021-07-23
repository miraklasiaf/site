import { Page } from '@/components/page'

function ProjectCard({ title, description, href, icon }) {
  return (
    <a
      className="w-full mb-4 hover:shadow"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
        {icon == 'grammarkup' && (
          <div className="h-8 w-8 ml-2 mr-4">
            <span className="sr-only">Grammarkup</span>
            <svg
              className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
              viewBox="0 0 500 500"
            >
              <path
                d="M0 250C0 156.538 0 109.808 20.0962 75C33.2614 52.1971 52.1971 33.2614 75 20.0962C109.808 0 156.538 0 250 0C343.462 0 390.192 0 425 20.0962C447.803 33.2614 466.739 52.1971 479.904 75C500 109.808 500 156.538 500 250C500 343.462 500 390.192 479.904 425C466.739 447.803 447.803 466.739 425 479.904C390.192 500 343.462 500 250 500C156.538 500 109.808 500 75 479.904C52.1971 466.739 33.2614 447.803 20.0962 425C0 390.192 0 343.462 0 250Z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M310.034 200.006H381.199C374.097 142.051 322.392 101 255.062 101C177.364 101 116 155.688 116 250.858C116 342.903 172.534 399.864 255.915 399.864C330.773 399.864 384.324 353.415 384.324 275.29V236.795H258.898V288.074H316.568C315.858 318.756 294.551 338.216 256.483 338.216C212.875 338.216 187.733 305.972 187.733 250.006C187.733 194.466 214.295 162.648 256.483 162.648C284.608 162.648 303.784 176.426 310.034 200.006Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="0"
                  y1="250"
                  x2="500"
                  y2="250"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#02AAB0"></stop>
                  <stop offset="1" stopColor="#00CDAC"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}
        {icon == 'miraklasiaf' && (
          <div className="h-8 w-8 ml-2 mr-4">
            <span className="sr-only">Learn Next.js</span>
            <svg
              className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100"
              viewBox="0 0 500 500"
            >
              <rect width="500" height="500" rx="250" fill="url(#paint0_linear)"></rect>
              <path
                d="M311.659 184.364H268.335V169.733C268.335 154.96 274.301 146.295 292.057 146.295C299.301 146.295 306.688 147.858 311.517 149.42L322.17 103.966C314.642 101.693 298.023 98 279.415 98C238.364 98 207.824 121.153 207.824 168.597V184.364H177V229.818H207.824V402.545H268.335V229.818H311.659V184.364Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="0"
                  y1="250"
                  x2="500"
                  y2="250"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#02AAB0"></stop>
                  <stop offset="1" stopColor="#00CDAC"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}
        <div>
          <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h4>
          <p className="leading-5 text-gray-700 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </a>
  )
}

export default function HomePage() {
  return (
    <Page title="Faisal Karim" description="Front-end developer and JavaScript enthusiast.">
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
        <ProjectCard
          title="Grammarkup"
          description="A web for learning english grammar."
          href="https://grammarkup.vercel.app/"
          icon="grammarkup"
        />
        <ProjectCard
          title="miraklasiaf.com"
          description="Personal website / portfolio / blog."
          href="https://miraklasiaf.com/"
          icon="miraklasiaf"
        />
      </div>
    </Page>
  )
}
