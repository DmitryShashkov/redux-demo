import { GoodInBasketProps } from '../interfaces';
import * as React from 'react';

export const GoodInBasket: React.StatelessComponent<GoodInBasketProps> = (props: GoodInBasketProps) : JSX.Element => (
    <div>
        '(basket) Good #' {props.id} x {props.amount}
        <button onClick={props.onRemove}>Remove</button>
    </div>
);