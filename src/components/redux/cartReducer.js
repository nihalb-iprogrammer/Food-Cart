
const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the item is already in the cart
      const existingItem = state.cartItems.find(
        (item) => item.foodName === action.payload.foodName && item.item === action.payload.item
      );

      if (existingItem) {
        // If the item already exists, update the quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.foodName === action.payload.foodName && item.item === action.payload.item
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      } else {
        // If the item is not in the cart, add it to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item !== action.payload),
      };

    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.foodName === action.payload.foodName && item.item === action.payload.item
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.foodName === action.payload.foodName && item.item === action.payload.item
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
