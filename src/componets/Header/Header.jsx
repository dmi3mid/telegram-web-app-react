import React from 'react';

import useTelegram from '../../hooks/useTelegram';

import classes from './Header.module.css';

export default function Header() {
    const {user} = useTelegram();
    return (
        <div className={classes.header}>
            <h1 className={classes.headerTitle}>
                {user?.username}
            </h1>
            <div className={classes.headerShoppingCart}>
                <span class="material-symbols-outlined">shopping_cart_checkout</span>
            </div>
        </div>
    )
}
