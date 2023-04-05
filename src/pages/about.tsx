import * as React from 'react';
import { Link } from 'gatsby';

export default function AboutPage() {
  return (
    <main>
      <h1>About Me</h1>
      <Link to='/home'>Home</Link>

      <div>
        <p>content ...</p>
      </div>
    </main>
  );
}

export const Head = () => <title>About Me</title>;
