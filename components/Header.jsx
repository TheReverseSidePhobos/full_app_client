import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="container">
          <ul>
            <div className="left_title">
              <li>
                <Link href={'/'}>
                  <a>
                    <h3>Home</h3>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/aboutUs'}>
                  <a>About Us</a>
                </Link>
              </li>
            </div>
            <li>
              <Link href={'/signup'}>
                <a>Sign up</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
