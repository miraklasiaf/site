import { AppMdx, AppPage } from '@mira/core';

import type { OtherPage } from '.contentlayer/types';
import { allOtherPages } from '.contentlayer/data';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function UsesPage({ body: { code } }: OtherPage) {
  const Component = useMDXComponent(code);

  return (
    <AppPage
      title="Uses / Faisal Karim"
      description="Here's what tech I'm currently using for coding."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Gear
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Here's what tech I'm currently using for coding.
        </p>
        <div className="prose dark:prose-dark w-full">
          <Component components={AppMdx} />
        </div>
      </article>
    </AppPage>
  );
}

export async function getStaticProps() {
  const uses = allOtherPages.find((page) => page.slug === 'uses')!;

  return { props: uses };
}
