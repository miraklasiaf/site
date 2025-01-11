'use client';

import { useState, useEffect } from 'react';
import NRIC from './nric';

export function AppNric() {
  const [date, setDate] = useState<Date | null>(null);

  const nric = date ? NRIC.GenerateNric(date).value : '';
  const fin = date ? NRIC.GenerateFin(date).value : '';

  useEffect(() => {
    setDate(NRIC.getRandomDate());
  }, []);

  if (!date) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Random Date: {date.toLocaleDateString('en-GB')}</p>
      <p>NRIC: {nric}</p>
      <p>FIN: {fin}</p>
      <button
        className="mt-2 px-2 py-1 text-xs rounded bg-blue-600 text-white hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => setDate(NRIC.getRandomDate())}
      >
        Generate
      </button>
    </div>
  );
}
