import React from 'react';

import useTelegram from '../../hooks/useTelegram';

import ProductItem from '../ProductItem/ProductItem';

import classes from './ProductList.module.css';


const getTotalPrice = (products) => {
  return products.reduce( (acc, item) => {
    return acc += item.price
  }, 0);
}

export default function ProductList({products, isCart, updateCart, cart}) {
  const {WebAppMainButton} = useTelegram();

  const onAddToCart = (product) => {
    let productsInCart = [...cart, product];
    localStorage("cart", JSON.stringify(productsInCart));
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

  // const onSendData = useCallback(() => {
  //   tg.sendData(JSON.stringify({cart: cart}));
  // }, [tg, cart]);

  // useEffect(() => {
  //     tg.onEvent('mainButtonClicked', onSendData);
  //     return () => {
  //       tg.offEvent('mainButtonClicked', onSendData);
  //     }
  //   }, [tg, onSendData]);

  // const onRemoveFromCart = (product) => {
  //   let productsInCart = [...cart];
  //   const alreadyRemoved = productsInCart.find(pr => pr.id === product.id)
  //   if (alreadyRemoved) {
  //     productsInCart = productsInCart.filter(pr => pr.id !== product.id)
  //     setCart(productsInCart);
  //     WebAppMainButton.setParams({
  //       text: `Continue ${getTotalPrice(productsInCart)}`
  //     })
  //   }
  //   if (productsInCart.length === 0) WebAppMainButton.hide()
  // }

  return (
    <div className={classes.productList}>
      {products.map((product, index) => (
        <ProductItem key={product.id} number={index+1} product={product} isCart={isCart} onAdd={onAddToCart}/>
      ))}
    </div>
  )
}
