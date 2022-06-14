import Head from 'next/head';
import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import styles from '@styles/Checkout.module.scss';
import AppContext from '@context/AppContext';

const Checkout = () => {
  const { state } = useContext(AppContext);
  const date = new Date().toLocaleDateString('en-US');
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles['Checkout-content']}>
            <div className={styles.order}>
              <p>
                <span>{date}</span>
                <span>{state.cart.length} articles</span>
              </p>
              <p>
                $
                {state.cart.reduce((accumulator, item) => {
                  return accumulator + item.price;
                }, 0)}
              </p>
            </div>
          </div>
          {state.cart.map((item, index) => {
            return <OrderItem product={item} key={index} indexValue={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Checkout;
