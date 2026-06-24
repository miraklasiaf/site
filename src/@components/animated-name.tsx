import Link from 'next/link';
import { ViewTransition } from 'react';

export function AnimatedName() {
  return (
    <ViewTransition>
      <Link href="/" className="flex mb-8 font-medium text-gray-400 fade-in">
        Faisal Karim
      </Link>
    </ViewTransition>
  );
}
