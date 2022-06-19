import React, { useContext } from 'react';
import Image from 'next/image';
import close from '@icons/icon_close.png';
import styles from '@styles/MenuMobile.module.scss';
import Link from 'next/link';
import AppContext from '@context/AppContext';

const MenuMobile = ({ toggleMobile, setToggleMobile }) => {
  const { updateType } = useContext(AppContext);
  return (
    <div className={styles.MenuMobile}>
      <figure>
        <Image src={close} alt="close" onClick={() => setToggleMobile(!toggleMobile)} className={styles.close} />
      </figure>

      <ul>
        <li>
          <button>CATEGORIES</button>
        </li>

        <li>
          <button
            onClick={(e) => {
              e.preventDefault();
              updateType('');
              setToggleMobile(!toggleMobile);
            }}
          >
            All
          </button>
        </li>

        <li>
          <button
            onClick={(e) => {
              e.preventDefault();
              updateType('Clothes');
              setToggleMobile(!toggleMobile);
            }}
          >
            Clothes
          </button>
        </li>

        <li>
          <button
            onClick={(e) => {
              e.preventDefault();
              updateType('Electronics');
              setToggleMobile(!toggleMobile);
            }}
          >
            Electronics
          </button>
        </li>

        <li>
          <button
            onClick={(e) => {
              e.preventDefault();
              updateType('Furniture');
              setToggleMobile(!toggleMobile);
            }}
          >
            Furnitures
          </button>
        </li>

        <li>
          <button
            onClick={(e) => {
              e.preventDefault();
              updateType('Shoes');
              setToggleMobile(!toggleMobile);
            }}
          >
            Shoes
          </button>
        </li>

        <li>
          <button
            onClick={(e) => {
              e.preventDefault();
              updateType('Others');
              setToggleMobile(!toggleMobile);
            }}
          >
            Other
          </button>
        </li>
      </ul>
      <ul>
        <li>
          <button>My orders</button>
        </li>

        <li>
          <button>My account</button>
        </li>
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
