import React from 'react';

import classes from './TgButton.module.css';
 
export default function TgButton({children, ...props}) {
    return (
      <button className={classes.TgButton} {...props}>{children}</button>
   )
 }
 