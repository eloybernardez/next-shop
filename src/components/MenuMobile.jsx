import React, { useContext } from 'react';
import Image from 'next/image';
import close from '@icons/icon_close.png';
import AppContext from '@context/AppContext';
import styles from '@styles/MenuMobile.module.scss';
import Link from 'next/link';

const MenuMobile = ({ toggleMobile, setToggleMobile }) => {
  const { state } = useContext(AppContext);
  return (
    <div className={styles.MenuMobile}>
      <figure>
        <Image src={close} alt="close" onClick={() => setToggleMobile(!toggleMobile)} />
      </figure>

      <ul>
        <Link href="/">
          <li>
            <a>CATEGORIES</a>
          </li>
        </Link>
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
            <a>Other</a>
          </li>
        </Link>
      </ul>
      <ul>
        <Link href="/">
          <li>
            <a>My orders</a>
          </li>
        </Link>
        <Link href="/">
          <li>
            <a>My account</a>
          </li>
        </Link>
      </ul>
      <ul>
        <Link href="/">
          <li>
            <a className={styles['email']}>platzi@example.com</a>
          </li>
        </Link>
        <Link href="/">
          <li>
            <a className={styles['sign-out']}>Sign out</a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default MenuMobile;
