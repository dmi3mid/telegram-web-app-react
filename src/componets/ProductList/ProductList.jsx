import React, {useState} from 'react';
import uniqid from 'uniqid';

import useTelegram from '../../hooks/useTelegram';

import ProductItem from '../ProductItem/ProductItem';

import classes from './ProductList.module.css';

const products = [
  {id: uniqid('pr-'), title: 'Node', description: 'Brief description of the product', price: 500},
  {id: uniqid('pr-'), title: 'Express', description: 'Brief description of the product', price: 450},
  {id: uniqid('pr-'), title: 'React', description: 'Brief description of the product', price: 470},
  {id: uniqid('pr-'), title: 'Mongo', description: 'Brief description of the product', price: 300},
  {id: uniqid('pr-'), title: 'Telegraf', description: 'Brief description of the product', price: 100},
  {id: uniqid('pr-'), title: 'Next', description: 'Brief description of the product', price: 350},
  {id: uniqid('pr-'), title: 'Vue', description: 'Brief description of the product', price: 400},
  {id: uniqid('pr-'), title: 'Nest', description: 'Brief description of the product', price: 410},
];

const getTotalPrice = (products) => {
  return products.reduce( (acc, item) => {
    return acc += item.price
  }, 0);
}

export default function ProductList() {
  const {WebAppMainButton} = useTelegram();
  const [cart, setCart] = useState([]);

  const onAddToCart = (product) => {
    let productsInCart = [...cart, product];
    setCart(productsInCart);

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

  const onRemoveFromCart = (product) => {
    let productsInCart = [...cart];
    const alreadyRemoved = productsInCart.find(pr => pr.id === product.id)
    if (alreadyRemoved) {
      productsInCart = productsInCart.filter(pr => pr.id !== product.id)
      setCart(productsInCart);
      WebAppMainButton.setParams({
        text: `Continue ${getTotalPrice(productsInCart)}`
      })
    }
    if (productsInCart.length === 0) WebAppMainButton.hide()
  }


  return (
    <div className={classes.productList}>
      {products.map((product, index) => (
        <ProductItem key={product.id} number={index+1} product={product} onAdd={onAddToCart} onRemove={onRemoveFromCart}/>
      ))}
    </div>
  )
}
