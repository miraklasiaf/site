export default function FeaturedProjectCard({ href, title, index }) {
  return (
    <a
      className="w-full"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-full border-b border-gray-200 dark:border-gray-700 py-3 transform hover:scale-[1.01] transition-all">
        <div className="flex flex-col sm:flex-row justify-between items-baseline">
          <div className="flex items-center">
            <div className="text-gray-300 dark:text-gray-400 text-left mr-6">
              {index}
            </div>
            <h4 className="text-lg font-medium w-full text-gray-800 dark:text-gray-100">
              {title}
            </h4>
            {index === '01' ? (
              <svg
                className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100 ml-auto"
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
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500 dark:text-gray-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}
