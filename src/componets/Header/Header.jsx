import React from 'react';

import useTelegram from '../../hooks/useTelegram';

export default function Header() {
    const {user} = useTelegram();
    return (
        <div>
            <h1>{user.username ? user.username : `User${user.id}`}</h1>
            <p><span class="material-symbols-outlined">shopping_cart_checkout</span></p>
        </div>
    )
}
