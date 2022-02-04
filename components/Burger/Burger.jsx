import React, { useState } from 'react';
import Image from 'next/image';

const Burger = () => {
  const [isBurger, setIsBurger] = useState(true);

  const handleBurger = () => {
    setIsBurger(!isBurger);
  };

  return (
    <div className={'burger'} onClick={handleBurger}>
      {isBurger ? (
        <>
          <div className="burger">
            <Image src={'/burger.png'} alt="burger" width={30} height={20} />
          </div>
        </>
      ) : (
        <>
          <div className="burger_closed">
            <Image src={'/closed_burger.png'} alt="burger" width={30} height={20} />
          </div>
        </>
      )}
    </div>
  );
};

export default Burger;
