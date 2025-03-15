import React, { useEffect } from 'react';

import TgButton from './componets/button/TgButton';

import useTelegram from './hooks/useTelegram';

import './App.css';


function App() {

  const {onClose, tg, user} = useTelegram()

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <p>
        {user?.username}
      </p>
      <TgButton onClick={onClose}>Close</TgButton>
    </div>
  );
}

export default App;