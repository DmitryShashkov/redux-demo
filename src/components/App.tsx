import { GoodsListContainer } from '../containers/GoodsList';
import { PaymentContainer } from '../containers/Payment';
import { BasketContainer } from '../containers/Basket';
import * as React from 'react';

export const App: React.StatelessComponent<undefined> = () : JSX.Element => (
    <div>
        <GoodsListContainer />
        <BasketContainer />
        <PaymentContainer />
    </div>
);