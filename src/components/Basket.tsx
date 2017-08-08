import { BasketProps, GoodInBasketProps, GoodProps, StoreState } from '../interfaces';
import { GoodInBasket } from './GoodInBasket';
import * as PropTypes from 'prop-types';
import * as React from 'react';

export class Basket extends React.Component<BasketProps> {
    public static contextTypes: any = {
        store: PropTypes.object
    };

    public props: BasketProps;

    private removeGood (good: GoodInBasketProps) : void {
        let state: StoreState = this.context.store.getState();
        let goodProps: GoodProps = state.goods.find((item: GoodProps) => item.id === good.id);

        if (goodProps) {
            this.props.onItemRemove(goodProps);
        }
    }

    public render () : JSX.Element {
        return (
            <div className="basket">
                <div className="title"> In basket: </div>
                { this.props.goods.map((good: GoodInBasketProps, index: number) => (
                    <GoodInBasket
                        key={index}
                        {...good}
                        onRemove={() => { this.removeGood(good); }}
                    />
                ))}
                {
                    !this.props.goods.length && <div className="no-items">
                        not a single shmeckle for now...
                    </div>
                }
                <div className="total-sum">
                    Total sum: {this.props.totalSum}
                </div>
                <button className="empty-button" onClick={this.props.onEmpty}>
                    <i className="fa fa-trash-o" aria-hidden="true" />
                </button>
            </div>
        )
    }
}