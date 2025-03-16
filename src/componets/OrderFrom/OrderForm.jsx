import React, {useEffect, useState} from 'react'
import useTelegram from '../../hooks/useTelegram';

import TgButton from '../button/TgButton';
import TgInput from '../input/TgInput';

import classes from './OrderForm.module.css';

export default function OrderForm() {
  const {tg} = useTelegram();

  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  
  const onCityChange = (ev) => {
    setCity(ev.target.value);
  }
  const onStreetChange = (ev) => {
    setStreet(ev.target.value);
  }

  useEffect(() => {
    tg.BottomButton.setParams({
      text: 'Send order data'
    }, []);
  });
  useEffect(() => {
    if (!city && !street) tg.BottomButton.hide();
    else tg.BottomButton.show();
  }, [city, street])

  return (
    <form className={classes.OrderForm}>
        <TgInput type='text' placeholder='Enter city' value={city} onChange={onCityChange}/>
        <TgInput tyoe='text' placeholder='Enter street' value={street} onChange={onStreetChange}/>
        <TgButton>Send order data</TgButton>
    </form>
  )
}
