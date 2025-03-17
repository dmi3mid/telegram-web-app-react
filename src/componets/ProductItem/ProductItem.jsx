import React from 'react'

import TgButton from '../button/TgButton';

import classes from './ProductItem.module.css';

export default function ProductItem({number, product}) {
  return (
    <div className={classes.productItem}>
      <h3 className={classes.productTitle}>{number}. {product.title}</h3>
      <img src="" alt="" />
      <div className={classes.productDescription}>{product.description}</div>
      <TgButton>Add {product.price}$</TgButton>
      <TgButton>Remove</TgButton>
    </div>
  )
}
