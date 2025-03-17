import React from 'react';

// import useTelegram from '../../hooks/useTelegram';

import classes from './Header.module.css';

export default function Header() {
    // const {user} = useTelegram();
    const tg = window.Telegram.WebApp;
    return (
        <div className={classes.header}>
            <h1 className={classes.headerTitle}>
                {tg.initDataUnsafe?.user?.username}
            </h1>
            <p><span class="material-symbols-outlined">shopping_cart_checkout</span></p>
        </div>
    )
}
