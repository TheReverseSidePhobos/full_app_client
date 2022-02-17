import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/auth_actions';
import Burger from './Burger/Burger';

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.task);
  const {isAuth, user, loading} = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  }
  return (
    <header className="header">
      <nav className="nav">
        <Burger />

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
                  <a>
                    <h5>About Us</h5>
                  </a>
                </Link>
              </li>
            </div>
            {
              loading ?
              <div className='load'>Loading ...</div> :
              !isAuth ?
              <div className="right_title">
                {!isLoggedIn && (
                  <li>
                    <Link href={'/signup'}>
                      <a>
                        <h5>Register</h5>
                      </a>
                    </Link>
                  </li>
                )}
                {!isLoggedIn && (
                  <li>
                    <Link href={'/signin'}>
                      <a>
                        <h5>Login</h5>
                      </a>
                    </Link>
                  </li>
                )}
              </div> 
              :
              <div className='right_title'>
                You logged in as {user.email}
                <h5 onClick={logoutHandler} className='logout'>Log out</h5>
              </div>
            }
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
