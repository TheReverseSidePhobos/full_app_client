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
                    <h5>Home</h5>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/aboutUs'}>
                  <a><h5>About Us</h5></a>
                </Link>
              </li>
            </div>
            <li>
              <Link href={'/signup'}>
                <a><h5>Sign up</h5></a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
