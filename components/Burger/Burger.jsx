import React, { useState } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setIsBurger } from '../../redux/actions/task_actions';
import { useEffect } from 'react';
import Link from 'next/link';

const Burger = () => {
  const dispatch = useDispatch();

  const { isBurger } = useSelector((state) => state.task);
  const { isLoggedIn } = useSelector((state) => state.task);
  const handleBurger = () => {
    dispatch(setIsBurger());
  };

  return (
    <div className="burger_wrapper">
      <div className={'burger'} onClick={handleBurger}>
        {!!isBurger ? (
          <>
            <div className="burger">
              <Image src={'/burger.png'} alt="burger" width={30} height={20} />
            </div>
          </>
        ) : (
          <>
            <div className="burger_closed">
              <Image
                src={'/closed_burger.png'}
                alt="burger"
                width={30}
                height={20}
              />
              <div className="sideMenu">
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
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Burger;
