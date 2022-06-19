import React, { useContext } from 'react';
import useGetProducts from '@hooks/useGetProducts';
import ProductItem from '@components/ProductItem';
import styles from '@styles/ProductList.module.scss';
import AppContext from '@context/AppContext';

const API = 'https://api.escuelajs.co/api/v1/products/';

const ProductList = () => {
  const { state } = useContext(AppContext);
  const products = useGetProducts(API).filter((item) => state.type === '' || item.category.name === state.type);

  return (
    <section className={styles['main-container']}>
      <div className={styles.ProductList}>
        {products.map((product, index) => {
          return <ProductItem product={product} indexValue={index} index={product.id} key={product.id} />;
        })}
      </div>
    </section>
  );
};

export default ProductList;
