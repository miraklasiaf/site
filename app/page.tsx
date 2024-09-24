export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
      <div className="flex flex-col-reverse sm:flex-row items-start">
        <div className="flex flex-col pr-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
            Faisal Karim
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            Software Engineer based in Jakarta, Indonesia
          </h2>
        </div>
      </div>
    </div>
  );
}
