


import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions';
import styles from './FoodCart.module.css';

const FoodCart = ({ foodName, item, price, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    addToCart(foodName, item, price, quantity);
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  };

  return (
    <div className={`${styles.foodCart} ${styles[foodName.toLowerCase()]}`}>
      <div className={styles.textContainer}>
        <div className={styles.itemInfo}>
          <h3 className={styles.CntrName}>{foodName}</h3>
          <p>{item}</p>
          <p className={styles.price}>${price}</p>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.quantity}>
            <button className={styles.quantityButton} onClick={handleDecrement}>
              <b>-</b>
            </button>
            <span className={styles.quantityValue}>{quantity}</span>
            <button className={styles.quantityButton} onClick={handleIncrement}>
              +
            </button>
          </div>
          <button className={styles.addButton} onClick={handleAddToCart}>
            <b>+ Add</b>
          </button>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.discountBadge}>25% OFF</div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (foodName, item, price, quantity) =>
      dispatch(addToCart(foodName, item, price, quantity)),
  };
};

export default connect(null, mapDispatchToProps)(FoodCart);




