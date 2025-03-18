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
export default function ProductList() {
  const {WebAppMainButton} = useTelegram();
  const [cart, setCart] = useState([]);

  const getTotalPrice = (products) => {
    return products.reduce( (acc, item) => {
      return acc + item.price
    }, 0);
  }

  const onAddToCart = (product) => {
    let productsInCart = [];
    productsInCart.push(product)
    setCart([productsInCart, ...cart]);
    if (productsInCart.length > 0) {
      WebAppMainButton.setParams({
        text: `Continue ${getTotalPrice(cart)}`
      })
      WebAppMainButton.show();
    }
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
