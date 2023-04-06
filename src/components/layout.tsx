import * as React from 'react';
import { Link } from 'gatsby';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <nav>
        <ul className='w-full flex gap-5 justify-center'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>

      <main className='max-w-5xl mx-auto'>{children}</main>
    </div>
  );
}
