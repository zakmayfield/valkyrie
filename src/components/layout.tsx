import * as React from 'react';
import { Link } from 'gatsby';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>

      <main>{children}</main>
    </div>
  );
}
