import React, { useEffect } from 'react';

import TgButton from './componets/button/TgButton';
import TgInput from './componets/input/TgInput';
import OrderForm from './componets/OrderFrom/OrderForm';

import useTelegram from './hooks/useTelegram';

import './App.css';


function App() {

  const {onClose, tg, user} = useTelegram()

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