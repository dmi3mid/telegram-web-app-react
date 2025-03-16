import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import uniqid from 'uniqid';

import OrderForm from './componets/OrderFrom/OrderForm';
import ProductList from './componets/ProductList/ProductList';

import useTelegram from './hooks/useTelegram';

import './App.css';

function App() {
  const [products] = useState([
    {id: uniqid('pr-'), title: 'Node', description: 'Brief description of the product', price: 500},
    {id: uniqid('pr-'), title: 'Express', description: 'Brief description of the product', price: 450},
    {id: uniqid('pr-'), title: 'React', description: 'Brief description of the product', price: 470},
    {id: uniqid('pr-'), title: 'Mongo', description: 'Brief description of the product', price: 300},
    {id: uniqid('pr-'), title: 'Telegraf', description: 'Brief description of the product', price: 100},
    {id: uniqid('pr-'), title: 'Next', description: 'Brief description of the product', price: 350},
    {id: uniqid('pr-'), title: 'Vue', description: 'Brief description of the product', price: 400},
    {id: uniqid('pr-'), title: 'Nest', description: 'Brief description of the product', price: 410},
  ])


  const {tg} = useTelegram()

  useEffect(() => {
    tg.ready();
  });

  return (
    <div className="App">
      <Routes>
        <Route index element = {<ProductList products={products}/>}/>
        <Route path='form' element = {<OrderForm/>}/>
      </Routes>
    </div>
  );
}

export default App;