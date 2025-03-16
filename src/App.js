import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import OrderForm from './componets/OrderFrom/OrderForm';
import ProductList from './componets/ProductList/ProductList';

import useTelegram from './hooks/useTelegram';

import './App.css';

function App() {

  const {tg} = useTelegram()

  useEffect(() => {
    tg.ready();
  });

  return (
    <div className="App">
      <Routes>
        <Route index element = {<ProductList/>}/>
        <Route path='form' element = {<OrderForm/>}/>
      </Routes>
    </div>
  );
}

export default App;