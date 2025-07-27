import { gql } from '@apollo/client';
import client from '../../lib/apolloClient';

// Enable ISR - revalidate every 60 seconds (1 minute)
export const revalidate = 60;

export default async function Home() {
  try {
    // Fetch posts from WordPress GraphQL
    const { data } = await client.query({
      query: gql`
        query AllPosts {
          posts(first: 5) {
            nodes {
              id
              title
              content
              date
              slug
              excerpt
            }
          }
        }
      `
    });

    const posts = data.posts.nodes;

    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Latest Posts from WordPress</h1>
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts found. Create some posts in WordPress to see them here!</p>
        ) : (
          posts.map((post: any) => (
            <article key={post.id} className="mb-8 p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2" dangerouslySetInnerHTML={{ __html: post.title }} />
              {post.excerpt && (
                <div className="text-gray-600 mb-3" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              )}
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
              <p className="text-sm text-gray-500 mt-4">
                Published: {new Date(post.date).toLocaleDateString()}
              </p>
            </article>
          ))
        )}
      </main>
    );
  } catch (error) {
    console.error('Error fetching posts:', error);
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
        <p className="text-red-500">
          Unable to load posts at the moment. Please try again later.
        </p>
      </main>
    );
  }
}
