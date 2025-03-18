import React from 'react';

import useTelegram from '../../hooks/useTelegram';

import ProductItem from '../ProductItem/ProductItem';

import classes from './ProductList.module.css';

export default function ProductList({products}) {
  const {WebAppMainButton} = useTelegram();
  const [cart, setCart] = useState([]);
  const onAddToCart = (product) => {
    let productsInCart = [];
    productsInCart.push(product)
    setCart(productsInCart);
    if (productsInCart.length > 0) WebAppMainButton.show();
  }
  // const onRemoveFromCart = (product) => {
  //   setCart(cart.filter(pr => pr.id !== product.id));
  // }


  return (
    <div className={classes.productList}>
      {products.map((product, index) => (
        <ProductItem key={product.id} number={index+1} product={product} onAdd={onAddToCart}/>
      ))}
    </div>
  )
}
