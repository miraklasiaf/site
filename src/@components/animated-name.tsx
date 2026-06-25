import Link from 'next/link';
import { ViewTransition } from 'react';

export function AnimatedName() {
  return (
    <ViewTransition>
      <Link
        href="/"
        className="fade-in mb-8 flex font-medium text-gray-400"
      >
        Faisal Karim
      </Link>
    </ViewTransition>
  );
}
