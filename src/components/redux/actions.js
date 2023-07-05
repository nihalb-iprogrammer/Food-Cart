

export const addToCart = (foodName, item, price, quantity) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      foodName,
      item,
      price,
      quantity,
    },
  };
};

export const removeFromCart = (item) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: item,
  };
};

export const incrementQuantity = (item) => {
  return {
    type: 'INCREMENT_QUANTITY',
    payload: item,
  };
};

export const decrementQuantity = (item) => {
  return {
    type: 'DECREMENT_QUANTITY',
    payload: item,
  };
};
