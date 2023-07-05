import React, { useState } from 'react';
import { connect } from 'react-redux';
import styles from './Navbar.module.css';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/actions';

const Navbar = ({ cartCount, cartItems, removeFromCart, incrementQuantity, decrementQuantity }) => {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const handleCartClick = () => {
    setOverlayVisible(!overlayVisible);
  };

  const handleRemoveItem = (item) => {
    removeFromCart(item);
  };

  const handleIncrementQuantity = (item) => {
    incrementQuantity(item);
  };

  const handleDecrementQuantity = (item) => {
    decrementQuantity(item);
  };

  const calculateTotalQuantity = () => {
    let totalQuantity = 0;
    cartItems.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };

  const calculateOverallTotalAmount = () => {
    let overallTotalAmount = 0;
    cartItems.forEach((item) => {
      overallTotalAmount += item.quantity * item.price;
    });
    return overallTotalAmount.toFixed(2);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <span className={styles.navbarBrand}><h3>ReactMeal</h3></span>
        {overlayVisible && (
          <div className={styles.totalAmount}>
            {/* Overall Total: ${calculateOverallTotalAmount()} */}
          </div>
        )}
      </div>
      <div className={styles.navbarRight}>
        <button className={styles.cartButton} onClick={handleCartClick}>
        <span className={styles.cartCount}>{calculateTotalQuantity()}</span>
        <svg
  className={`${styles.cart} ${styles.smallCart}`}
  xmlns='http://www.w3.org/2000/svg'
  viewBox='0 0 19 19'
  fill='currentColor'
>
  <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
</svg>
         &nbsp; <b> Cart </b>
        </button>
        
      </div>
      {overlayVisible && (
  <div className={styles.cartOverlay}>
    <div className={styles.cartItems}>
      <div className={styles.cartHeader}>
        <div className={styles.totalAmount}>

         Total: ${calculateOverallTotalAmount()}
        </div>
      </div>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div className={styles.itemInfo}>
                <span>
                  {item.foodName} - ${item.price}
                </span>
                <div className={styles.quantityControl}>
                  <button onClick={() => handleDecrementQuantity(item)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrementQuantity(item)}>
                    +
                  </button>
                </div>
              </div>
              <div className={styles.buttonsContainer}>
                <button
                  className={styles.removeButton}
                  onClick={() => handleRemoveItem(item)}
                >Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.emptyCart}>
          <img src="https://cdn.dribbble.com/users/1555425/screenshots/4811660/media/1965aabe4e0d22814004ac2c9dd96d51.jpg?resize=400x0" alt="Empty Cart" />
          <p>Your cart is empty.</p>
        </div>
      )}
      <div className={styles.cartFooter}>
        <div className={styles.buttonContainer}>
          <button className={styles.closeButton} onClick={handleCartClick}>
            Close
          </button>
          <button className={styles.orderButton}> Order</button>
        </div>
      </div>
    </div>
  </div>
)}
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cartCount: state.cart.cartItems.length,
    cartItems: state.cart.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (item) => dispatch(removeFromCart(item)),
    incrementQuantity: (item) => dispatch(incrementQuantity(item)),
    decrementQuantity: (item) => dispatch(decrementQuantity(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);