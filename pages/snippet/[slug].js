import { MDXRemote } from 'next-mdx-remote';

import { getFiles, getFileBySlug } from '../../lib/mdx'
import MDXComponents from '../../components/MDXComponents'
import ProjectLayout from '../../components/SnippetLayout'

export default function Project({ mdxSource, frontMatter }) {

  return (
    <ProjectLayout frontMatter={frontMatter}>
      <MDXRemote
        {...mdxSource}
        components={{
          ...MDXComponents
        }}
      />
    </ProjectLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('snippet');

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
  const post = await getFileBySlug('snippet', params.slug);
//   const tweets = await getTweets(post.tweetIDs);

  return { props: { ...post } };
}