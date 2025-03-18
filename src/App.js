import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import OrderForm from './componets/OrderFrom/OrderForm';
import ProductList from './componets/ProductList/ProductList';
import Header from './componets/Header/Header';

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
        <Route index element = {
          <div>
            <Header/>
            <ProductList/>
          </div>
         }/>
        <Route path='form' element = {<OrderForm/>}/>
        {/* <Route path='cart' element = {<Cart/>}/> */}
      </Routes>
    </div>
  );
}

export default App;