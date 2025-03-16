import React from 'react';

import classes from './TgButton.module.css';
import '../../styles/TgFontStyle.css';
 
export default function TgButton({children, ...props}) {
    return (
        <button className={[classes.TgButton, 'robot-font'].join(' ')} {...props}>{children}</button>
   )
 }
 