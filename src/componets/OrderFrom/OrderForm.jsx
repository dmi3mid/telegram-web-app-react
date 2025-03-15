import React from 'react'

import TgButton from '../button/TgButton';
import TgInput from '../input/TgInput';

import classes from './OrderForm.module.css';

export default function OrderForm() {
  return (
    <form className={classes.OrderForm}>
        <TgInput type='text' placeholder='Enter city'/>
        <TgInput tyoe='text' placeholder='Enter street'/>
        <TgButton>Send order data</TgButton>
    </form>
  )
}
