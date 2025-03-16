import React from 'react';

import ProductItem from '../ProductItem/ProductItem';

import classes from './ProductList.module.css';

export default function ProductList({products}) {
  return (
    <div className={classes.productList}>
        {products.map((product, index) => (
          <ProductItem key={product.id} number={index+1} product={product}/>
        ))}
    </div>
  )
}
