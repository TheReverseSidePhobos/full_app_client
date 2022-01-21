import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li>
            <Link href={'/'}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={'/aboutUs'}>
              <a>About Us</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
