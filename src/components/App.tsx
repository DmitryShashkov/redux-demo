import { GoodsListContainer } from '../containers/GoodsList';
import { BasketContainer } from '../containers/Basket';
import * as React from 'react';
import {PaymentContainer} from "../containers/Payment";

export const App: React.StatelessComponent<undefined> = () : JSX.Element => (
    <div>
        <GoodsListContainer />
        <BasketContainer />
        <PaymentContainer />
    </div>
);