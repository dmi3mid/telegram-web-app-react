import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import uniqid from 'uniqid';

import OrderForm from './componets/OrderFrom/OrderForm';
import ProductList from './componets/ProductList/ProductList';
import Header from './componets/Header/Header';

import useTelegram from './hooks/useTelegram';

import './App.css';

const products = [
  {id: uniqid('pr-'), title: 'Node', description: 'Brief description of the product', price: 500},
  {id: uniqid('pr-'), title: 'Express', description: 'Brief description of the product', price: 450},
  {id: uniqid('pr-'), title: 'React', description: 'Brief description of the product', price: 470},
  {id: uniqid('pr-'), title: 'Mongo', description: 'Brief description of the product', price: 300},
  {id: uniqid('pr-'), title: 'Telegraf', description: 'Brief description of the product', price: 100},
  {id: uniqid('pr-'), title: 'Next', description: 'Brief description of the product', price: 350},
  {id: uniqid('pr-'), title: 'Vue', description: 'Brief description of the product', price: 400},
  {id: uniqid('pr-'), title: 'Nest', description: 'Brief description of the product', price: 410},
];

function App() {
  const {tg} = useTelegram()
  useEffect(() => {
    tg.ready();
  });

  const [cart, setCart] = useState([]);
  const updateCart = (productsInCart) => {
    setCart(productsInCart);
  };

  return (
    <div className="App">
      <Routes>
        <Route index element = {
          <div>
            <Header/>
            <ProductList products={products} updateCart={updateCart} cart={cart}/>
          </div>
         }/>
        <Route path='form' element = {<OrderForm/>}/>
        {/* <Route path='cart' element = {<ProductList isCart={true} products={cart}/>}/> */}
      </Routes>
    </div>
  );
}

export default App;