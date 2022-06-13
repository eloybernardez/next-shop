import React from 'react';

import styles from '@styles/Menu.module.scss';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <ul>
        <Link href="/">
          <li>
            <a className={styles['title']}>My orders</a>
          </li>
        </Link>
        <Link href="/">
          <li>
            <a>My account</a>
          </li>
        </Link>
        <Link href="/">
          <li>
            <a>Sign out</a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
