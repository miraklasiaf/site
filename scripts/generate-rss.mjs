import RSS from 'rss';
import { allBlogs } from '.contentlayer/data';
import { writeFileSync } from 'fs';

async function generate() {
  const feed = new RSS({
    title: 'Faisal Karim',
    site_url: 'https://miraklasiaf.com',
    feed_url: 'https://miraklasiaf.com/feed.xml'
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://miraklasiaf.com/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.description
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
