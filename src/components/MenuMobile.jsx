import React from 'react';
import Image from 'next/image';
import close from '@icons/icon_close.png';
import styles from '@styles/MenuMobile.module.scss';
import Link from 'next/link';

const MenuMobile = ({ toggleMobile, setToggleMobile }) => {
  return (
    <div className={styles.MenuMobile}>
      <figure>
        <Image src={close} alt="close" onClick={() => setToggleMobile(!toggleMobile)} className={styles.close} />
      </figure>

      <ul>
        <Link href="/">
          <li>
            <button>CATEGORIES</button>
          </li>
        </Link>
        <Link href="/">
          <li>
            <button>All</button>
          </li>
        </Link>
        <Link href="/">
          <li>
            <button>Clothes</button>
          </li>
        </Link>
        <Link href="/">
          <li>
            <button>Electronics</button>
          </li>
        </Link>
        <Link href="/">
          <li>
            <button>Furnitures</button>
          </li>
        </Link>
        <Link href="/">
          <li>
            <button>Toys</button>
          </li>
        </Link>
        <Link href="/">
          <li>
            <button>Other</button>
          </li>
        </Link>
      </ul>
      <ul>
        <Link href="/">
          <li>
            <button>My orders</button>
          </li>
        </Link>
        <Link href="/">
          <li>
            <button>My account</button>
          </li>
        </Link>
      </ul>
      <ul>
        <Link href="/">
          <li>
            <button className={styles['email']}>platzi@example.com</button>
          </li>
        </Link>
        <Link href="/">
          <li>
            <button className={styles['sign-out']}>Sign out</button>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default MenuMobile;
