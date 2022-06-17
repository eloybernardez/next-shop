import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/Menu';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import MenuMobile from '@components/MenuMobile';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state, updateType } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleMobile = () => {
    setToggleMobile(!toggleMobile);
  };

  return (
    <>
      <nav className={styles.Nav}>
        <button className={styles.menu} onClick={handleMobile}>
          <img src={menu.src} alt="menu" />
        </button>
        <div className={styles['navbar-left']}>
          <Link href="/" onClick={(e) => e.preventDefault()}>
            <Image src={logo} alt="logo" className={styles['nav-logo']} />
          </Link>
          <ul>
            <li>
              <button onClick={() => updateType('Clothes')}>All</button>
            </li>

            <li>
              <button onClick={() => updateType('Clothes')}>Clothes</button>
            </li>

            <li>
              <button onClick={() => updateType('Electronics')}>Electronics</button>
            </li>

            <li>
              <button onClick={() => updateType('Furniture')}>Furnitures</button>
            </li>

            <li>
              <button onClick={() => updateType('Shoes')}>Shoes</button>
            </li>

            <li>
              <button onClick={() => updateType('Others')}>Others</button>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <li>
              <button className={styles['navbar-email']} onClick={handleToggle}>
                platzi@example.com
              </button>
            </li>
            <li className={styles['navbar-shopping-cart']}>
              <Image className={styles.pointer} src={shoppingCart} alt="shopping cart" onClick={() => setToggleOrders(!toggleOrders)} />
              {state.cart?.length > 0 ? <div>{state.cart?.length}</div> : null}
            </li>
          </ul>
        </div>
        {toggle ? <Menu /> : null}

        {toggleOrders ? <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} /> : null}

        {toggleMobile ? <MenuMobile toggleMobile={toggleMobile} setToggleMobile={setToggleMobile} /> : null}
      </nav>
    </>
  );
};

export default Header;
