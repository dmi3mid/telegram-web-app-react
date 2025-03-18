import React, { useState, useEffect, useCallback } from 'react'
import useTelegram from '../../hooks/useTelegram';

import TgInput from '../UI/input/TgInput';

import classes from './OrderForm.module.css';

export default function OrderForm() {
  const {tg, WebAppMainButton} = useTelegram();

  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const onCityChange = (ev) => {
    setCity(ev.target.value);
  }
  const onStreetChange = (ev) => {
    setStreet(ev.target.value);
  }

  useEffect(() => {
    WebAppMainButton.setParams({
      text: 'Send order data'
    });
  }, [WebAppMainButton]);

  useEffect(() => {
    if (!city || !street) WebAppMainButton.hide();
    else WebAppMainButton.show();
  }, [city, street, WebAppMainButton]);

  const onSendData = useCallback(() => {
    tg.sendData(JSON.stringify({city, street}));
  }, [city, street, tg]);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);
    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    }
  }, [tg, onSendData]);

  return (
    <form className={classes.OrderForm}>
        <TgInput type='text' placeholder='Enter city' value={city} onChange={onCityChange}/>
        <TgInput tyoe='text' placeholder='Enter street' value={street} onChange={onStreetChange}/>
    </form>
  )
}
