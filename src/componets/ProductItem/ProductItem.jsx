import React from 'react'

import TgButton from '../UI/button/TgButton';

import classes from './ProductItem.module.css';

export default function ProductItem({number, product, onAdd}) {

  const onAddToCart = () => {
    onAdd(product)
  }
  // const onRemoveFromCart = () => {
  //   onRemove(product)
  // }

  return (
    <div className={classes.productItem}>
      <h3 className={classes.productTitle}>{number}. {product.title}</h3>
      <img src="" alt="" />
      <div className={classes.productDescription}>{product.description}</div>
      <div className={classes.productBtnsBlock}>
        <TgButton onClick={onAddToCart}>Add {product.price}$</TgButton>
      </div>
    </div>
  )
}
