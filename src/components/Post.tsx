import * as React from 'react';

interface BlogPostProps {
  meta: {
    title: string;
    date: string;
  };
  children: React.ReactNode;
}

const Post = ({ meta, children }: BlogPostProps) => {
  return (
    <>
      <h1 className='text-xl font-bold'>{meta.title}</h1>

      <h2 className='text-lg font-semibold'>{meta.date}</h2>

      {children}
    </>
  );
};

export default Post;
