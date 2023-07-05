import React from 'react';
import styles from './SummaryBox.module.css';

const InformationBox = () => {
  return (
    <div className={styles.informationBox}>
      <div className={styles.paragraph}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch 
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
      <p>
      </p>
    
      </div>
      <div className={styles.paragraph}>
        
        <br></br>
      </div>
    </div>
  );
};

export default InformationBox;
