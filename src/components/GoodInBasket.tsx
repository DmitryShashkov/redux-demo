import { GoodInBasketProps } from '../interfaces';
import * as React from 'react';

export const GoodInBasket: React.StatelessComponent<GoodInBasketProps> = (props: GoodInBasketProps) : JSX.Element => (
    <div className="good-in-basket">
        Entry #{props.id} x {props.amount}
        <div className="line" />
        <button className="remove-button" onClick={props.onRemove}>
            <i className="fa fa-free-code-camp" aria-hidden="true" />
        </button>
    </div>
);