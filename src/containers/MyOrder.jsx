import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import flechita from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = ({ toggleOrders, setToggleOrders }) => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <Image src={flechita} alt="arrow" onClick={() => setToggleOrders(!toggleOrders)} />
        <p className={styles['title']}>My order</p>
      </div>
      <div className={styles['my-order-content']}>
        {state.cart.map((product, index) => {
          return <OrderItem indexValue={index} key={index} product={product} />; // el indexValue es para que cuando eliminemos un producto no se eliminen los repetidos. el index es para dar keys UNICAS a cada producto
        })}
        <div className={styles['order']}>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <Link href="/checkout">
          <button className={styles['primary-button']}>Checkout</button>
        </Link>
      </div>
    </aside>
  );
};

export default MyOrder;
