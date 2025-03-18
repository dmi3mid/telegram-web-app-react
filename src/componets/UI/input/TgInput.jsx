import React from 'react'

import classes from './TgInput.module.css';

export default function TgInput(props) {
  return (
    <input {...props} className={classes.TgInput}/>
  )
}
