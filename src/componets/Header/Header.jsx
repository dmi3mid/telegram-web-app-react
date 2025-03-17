import React from 'react';

import useTelegram from '../../hooks/useTelegram';
import useStyles from '../../hooks/useStyles';

export default function Header() {
    const {shoppingCartCheckout, materialSymbolsOutlined} = useStyles();
    const {user} = useTelegram();
    return (
        <div>
            <h1>{user.username ? user.username : `User${user.id}`}</h1>
            <p><span class={materialSymbolsOutlined}>{shoppingCartCheckout}</span></p>
        </div>
    )
}
