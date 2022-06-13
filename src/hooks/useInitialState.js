import { useState } from 'react';

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (key) => {
    setState({
      ...state,
      cart: state.cart.filter((_, index) => {
        return key != index;
      }),
    });
  };

  const removeFromCartWithId = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((product) => {
        return product.id != id;
      }),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    removeFromCartWithId,
  };
};

export default useInitialState;
