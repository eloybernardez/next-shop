import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //no se puede usar async en useEffect, así que se utiliza una función asíncrona por dentro que haga la petición a la API.
      const response = await axios(API);
      const filteredProducts = response.data.filter((item) => {
        return item.images.length > 0;
      });
      setProducts(filteredProducts);
    };
    fetchData();
  }, [API]);
  return products;
};

export default useGetProducts;
