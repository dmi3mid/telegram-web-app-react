import { useEffect } from 'react';

import TgButton from './componets/button/TgButton';

import './App.css';

const tg = window.Telegram.WebApp;


function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    console.log(tg.initDataUnsafe);
    tg.close();
  }
  return (
    <div className="App">
      <TgButton onClick={onClose}>Close</TgButton>
    </div>
  );
}

export default App;
