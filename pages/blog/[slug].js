import { useRouter } from 'next/router';

const BlogPost = () => {
  const { query: { slug } } = useRouter();

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>Ini adalah blog post dengan slug {slug}.</p>
    </div>
  );
};

export default BlogPost;
