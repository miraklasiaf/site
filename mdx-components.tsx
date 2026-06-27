import React, { ComponentPropsWithoutRef } from 'react';

import Link from 'next/link';
import { highlight } from 'sugar-high';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

const components = {
  h1: (props: HeadingProps) => (
    <h1
      className="fade-in mb-1 text-xl leading-6 font-medium md:text-2xl"
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="mt-8 mb-2 text-lg font-medium"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="mt-6 mb-2 text-base font-medium"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => (
    <h4
      className="mt-4 mb-1 font-medium"
      {...props}
    />
  ),
  p: (props: ParagraphProps) => (
    <p
      className="text-copy my-5"
      {...props}
    />
  ),
  ol: (props: ListProps) => (
    <ol
      className="list-decimal space-y-2 pl-4 text-gray-800"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="list-disc space-y-1 pl-4 text-gray-800"
      {...props}
    />
  ),
  li: (props: ListItemProps) => (
    <li
      className="relative pl-0"
      {...props}
    />
  ),
  em: (props: ComponentPropsWithoutRef<'em'>) => (
    <em
      className="font-medium"
      {...props}
    />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong
      className="font-medium"
      {...props}
    />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      'transition-colors underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] hover:decoration-neutral-400 dark:hover:decoration-neutral-600';

    if (href?.startsWith('/')) {
      return (
        <Link
          href={href}
          className={className}
          {...props}
        >
          {children}
        </Link>
      );
    }

    if (href?.startsWith('#')) {
      return (
        <a
          href={href}
          className={className}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
    const codeHTML = highlight(children as string);
    return (
      <code
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        {...props}
      />
    );
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700"
      {...props}
    />
  )
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
