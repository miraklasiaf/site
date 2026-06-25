import Link from 'next/link';

export function AnimatedName() {
  return (
    <Link
      href="/"
      className="fade-in mb-8 flex font-medium text-gray-400"
    >
      Faisal Karim
    </Link>
  );
}
