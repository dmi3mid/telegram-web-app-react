import React from 'react';

import useTelegram from '../../hooks/useTelegram';

import classes from './Header.module.css';

export default function Header() {
    const {user} = useTelegram();
    return (
        <div className={classes.header}>
            <h1 className={classes.headerTitle}>
                User
                {/* {user.username ? user.username : `User${user.id}`}&nbsp; */}
                <span class="material-symbols-outlined">shopping_cart_checkout</span>
            </h1>
        </div>
    )
}
