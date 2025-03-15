import React, { useEffect } from 'react';

import OrderForm from './componets/OrderFrom/OrderForm';

import useTelegram from './hooks/useTelegram';

import './App.css';


function App() {

  const {tg} = useTelegram()

  useEffect(() => {
    tg.ready();
  });

  return (
    <div className="App">
      <OrderForm/>
    </div>
  );
}

export default App;