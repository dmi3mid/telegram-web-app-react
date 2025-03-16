import React from 'react'

import TgButton from '../button/TgButton';

import classes from './ProductItem.module.css';

export default function ProductItem({number, title, description, price}) {
  return (
    <div className={classes.productItem}>
      <h3 className={classes.productTitle}>{number}. {title}</h3>
      <img src="" alt="" />
      <div className={classes.productDescription}>{description}</div>
      <TgButton>Add {price}</TgButton>
    </div>
  )
}
