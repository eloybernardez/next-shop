import { useState } from 'react';

const initialState = {
  cart: [],
  type: '',
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

  const updateType = (string) => {
    setState({
      ...state,
      type: string,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    removeFromCartWithId,
    updateType,
  };
};

export default useInitialState;
