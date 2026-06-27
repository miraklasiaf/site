'use client';

export function Experience() {
  const codingYears = new Date().getFullYear() - 2014;
  const professionalYears = new Date().getFullYear() - 2021;

  return (
    <span>
      I've been coding for {codingYears} years, with {professionalYears} years of
      professional software engineering experience
    </span>
  );
}
