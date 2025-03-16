import React, {useState} from 'react'

import TgButton from '../button/TgButton';
import TgInput from '../input/TgInput';

import classes from './OrderForm.module.css';

export default function OrderForm() {

  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  
  const onCityChange = (ev) => {
    setCity(ev.target.value);
  }
  const onStreetChange = (ev) => {
    setStreet(ev.target.value);
  }

  return (
    <form className={classes.OrderForm}>
        <TgInput type='text' placeholder='Enter city' value={city} onChange={onCityChange}/>
        <TgInput tyoe='text' placeholder='Enter street' value={street} onChange={onStreetChange}/>
        <TgButton>Send order data</TgButton>
    </form>
  )
}
