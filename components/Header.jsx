import Link from 'next/link';
import { useSelector } from 'react-redux';
import Burger from './Burger/Burger';

const Header = () => {
  const { isLoggedIn} = useSelector((state) => state.task);
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
            <Burger/>
            <div className="right_title">
              {
                !isLoggedIn &&
                <li>
                  <Link href={'/signup'}>
                    <a><h5>Register</h5></a>
                  </Link>
                </li>
              }
              {
                  !isLoggedIn &&
                  <li>
                    <Link href={'/signin'}>
                      <a><h5>Login</h5></a>
                    </Link>
                  </li>
              }
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
