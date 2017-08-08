import { 
    GoodInBasketProps, PaymentComponentState,
    PaymentComponentProps, StoreState 
} from '../interfaces';
import * as PropTypes from 'prop-types';
import * as React from 'react';

export class Payment extends React.Component<PaymentComponentProps, PaymentComponentState> {
    public static contextTypes: any = {
        store: PropTypes.object
    };

    public props: PaymentComponentProps;

    public state: PaymentComponentState;

    constructor () {
        super();
        this.state = {
            shouldDisplayMessage: false
        };
    }

    private buyGoods () : void {
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
            <div className="payment">
                <div className="money-left">
                    Money left: { this.props.moneyLeft }
                </div>
                <button className="buy-button"
                    onClick={this.buyGoods.bind(this)}>
                    Buy!
                </button>
                <div className="status">
                    { this.state.shouldDisplayMessage && this.props.statusMessage }
                </div>
            </div>
        );
    }
}