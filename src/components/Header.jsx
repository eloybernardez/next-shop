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
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleMobile = () => {
    setToggleMobile(!toggleMobile);
  };

  return (
    <nav className={styles.Nav}>
      <Image src={menu} alt="menu" className={styles.menu} onClick={handleMobile} />
      <div className={styles['navbar-left']}>
        <Link href="/">
          <Image src={logo} alt="logo" className={styles['nav-logo']} />
        </Link>
        <ul>
          <Link href="/">
            <li>
              <a>All</a>
            </li>
          </Link>
          <Link href="/">
            <li>
              <a>Clothes</a>
            </li>
          </Link>
          <Link href="/">
            <li>
              <a>Electronics</a>
            </li>
          </Link>
          <Link href="/">
            <li>
              <a>Furnitures</a>
            </li>
          </Link>
          <Link href="/">
            <li>
              <a>Toys</a>
            </li>
          </Link>
          <Link href="/">
            <li>
              <a>Others</a>
            </li>
          </Link>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={handleToggle}>
            platzi@example.com
          </li>
          <li className={styles['navbar-shopping-cart']} onClick={() => setToggleOrders(!toggleOrders)}>
            <Image className={styles.pointer} src={shoppingCart} alt="shopping cart" />
            {state.cart?.length > 0 ? <div>{state.cart?.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle ? <Menu /> : null}

      {toggleOrders ? <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} /> : null}

      {toggleMobile ? <MenuMobile toggleMobile={toggleMobile} setToggleMobile={setToggleMobile} /> : null}
    </nav>
  );
};

export default Header;
