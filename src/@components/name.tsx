export function Name() {
  return (
    <h1 className="transition-element pt-12 font-medium">
      <span className="sr-only">Faisal Karim</span>
      <span
        aria-hidden="true"
        className="group relative block overflow-hidden"
      >
        <span className="inline-block whitespace-nowrap transition-all duration-300 ease-in-out group-hover:-translate-y-full">
          {'Faisal Karim'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </span>
        <span className="absolute top-0 left-0 inline-block translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0">
          {'miraklasiaf'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter}
            </span>
          ))}
        </span>
      </span>
    </h1>
  );
}
