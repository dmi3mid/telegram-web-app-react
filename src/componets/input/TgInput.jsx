import React from 'react'

import classes from './TgInput.module.css';
import '../../styles/TgFontStyle.css';

export default function TgInput(props) {
  return (
    <input {...props} className={[classes.TgInput, 'roboto-font'].join(' ')}/>
  )
}
