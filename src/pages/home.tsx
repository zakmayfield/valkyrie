import * as React from 'react';
import { Link } from 'gatsby';

export default function HomePage() {
  return (
    <main>
      <h1>Home Page</h1>
      <Link to='/about'>About</Link>
      <div>
        <p>content...</p>
      </div>
    </main>
  );
}

export const Head = () => <title>Home</title>;
