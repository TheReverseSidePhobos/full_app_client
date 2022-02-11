import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const SideMenu = () => {
  const { isLoggedIn } = useSelector((state) => state.task);

  return (
    <div>
      <Link href={'/'}>
        <a>
          <h5>Home</h5>
        </a>
      </Link>
      <Link href={'/aboutUs'}>
        <a>
          <h5>About Us</h5>
        </a>
      </Link>
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
  );
};

export default SideMenu;
