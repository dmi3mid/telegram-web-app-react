import React from 'react';

import useTelegram from '../../hooks/useTelegram';

import ProductItem from '../ProductItem/ProductItem';

import classes from './ProductList.module.css';


const getTotalPrice = (products) => {
  return products.reduce( (acc, item) => {
    return acc += item.price
  }, 0);
}

export default function ProductList({products, updateCart, cart}) {
  const {WebAppMainButton} = useTelegram();

  const onAddToCart = (product) => {
    let productsInCart = [...cart, product];
    updateCart(productsInCart);
    if (productsInCart.length === 0) {
      WebAppMainButton.hide();
    }
    else {
      WebAppMainButton.setParams({
        text: `Continue ${getTotalPrice(productsInCart)}`
      })
      WebAppMainButton.show();
    }
  }

  return (
    <div className={classes.productList}>
      {products.map((product, index) => (
        <ProductItem key={product.id} number={index+1} product={product} onAdd={onAddToCart}/>
      ))}
    </div>
  )
}