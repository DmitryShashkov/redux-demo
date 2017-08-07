import {
    GoodInBasketProps, GoodProps, PaymentComponentState, PaymentComponentProps, PaymentState,
    StoreState
} from "../interfaces";
import * as React from "react";
import * as PropTypes from 'prop-types';

export class Payment extends React.Component<PaymentComponentProps, PaymentComponentState> {
    public static contextTypes: any = {
        store: PropTypes.object
    };

    public props: PaymentComponentProps;

    public state: PaymentComponentState;

    constructor (props: PaymentComponentProps) {
        super(props);
        this.state = {
            shouldDisplayMessage: false
        };
    }

    private buyGoods () {
        let state: StoreState = this.context.store.getState();
        let goodsInBasket: GoodInBasketProps[] = state.basket.goods;

        if (goodsInBasket.length) {
            this.props.onBuyAttempt(goodsInBasket);
        }
    }

    componentDidUpdate (prevProps: PaymentComponentProps) {
        if (this.props.isInProgress && !this.state.shouldDisplayMessage) {
            this.setState({
                shouldDisplayMessage: true
            });
        }

        if (prevProps.isInProgress && !this.props.isInProgress) {
            setTimeout(() => {
                this.setState({
                    shouldDisplayMessage: false
                });
            }, 3000);
        }
    }

    render () {
        return (
            <div>
                Money left: { this.props.moneyLeft }
                <button onClick={this.buyGoods.bind(this)}>Buy!</button>
                { this.state.shouldDisplayMessage && this.props.statusMessage }
            </div>
        );
    }
}