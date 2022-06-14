import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCartWithId } = useContext(AppContext);

  const handleClick = (item) => {
    if (!item.cart) {
      addToCart(item);
      item.cart = true;
    } else {
      removeFromCartWithId(item.id);
      item.cart = false;
    }
  };

  return (
    <div className={styles.ProductItem}>
      <Image src={product?.images[0]} alt={product?.title} width={240} height={240} />
      <div className={styles['product-info']}>
        <div>
          <p>${product?.price}</p>
          <p>{product?.title}</p>
        </div>
        <figure>
          <Image src={product?.cart ? addedToCartImage : addToCartImage} alt="add to cart" width={35} height={35} onClick={() => handleClick(product)} />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
