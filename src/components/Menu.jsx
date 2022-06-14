import React from 'react';

import styles from '@styles/Menu.module.scss';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className={styles.Menu}>
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
        <Link href="/">
          <li>
            <button>Sign out</button>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
