
import React from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import Navbar from './components/Header/Navbar';
import InformationBox from './components/Summary/SummaryBox';
import FoodCart from './components/foodcart/FoodCart';

import './App.css';
function App() {
  return (
    <div className="App">
     <Provider store={store}>
      <div>
        <Navbar />
        <InformationBox />
        <FoodCart foodName="sushi" item="Finest fish" price={300.99} />
        <FoodCart foodName="samosa" item="Spicy" price={133.99} />
        <FoodCart foodName="sandwich" item="American,raw" price={133.99} />


      </div>
    </Provider>
    </div>
  );
}

export default App;
