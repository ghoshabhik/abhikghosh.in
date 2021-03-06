import { MDXRemote } from 'next-mdx-remote';

import { getFiles, getFileBySlug } from '../../lib/mdx'
import MDXComponents from '../../components/MDXComponents'
import BlogLayout from '../../components/BlogLayout'

export default function Blog({ mdxSource, frontMatter }) {

  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote
        {...mdxSource}
        components={{
          ...MDXComponents
        }}
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug);
//   const tweets = await getTweets(post.tweetIDs);

  return { props: { ...post } };
}