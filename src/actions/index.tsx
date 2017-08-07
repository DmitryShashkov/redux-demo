import {
    AddToBasketAction, BuyFailureAction, BuyRequestAction,
    BuySuccessAction, CustomAction, GoodInBasketProps,
    GoodProps, RemoveFromBasketAction, StoreState
} from '../interfaces';
import { ActionCreator } from 'react-redux';
import { ACTION_TYPES } from '../constants';

export const addToBasket
    : ActionCreator<AddToBasketAction>
    = (good: GoodProps) : AddToBasketAction => ({
        type: ACTION_TYPES.ADD_TO_BASKET,
        goodID: good.id,
        goodPrice: good.price
    });

export const removeFromBasket
    : ActionCreator<RemoveFromBasketAction>
    = (good: GoodProps) : RemoveFromBasketAction => ({
        type: ACTION_TYPES.REMOVE_FROM_BASKET,
        goodID: good.id,
        goodPrice: good.price
    });

export const clearBasket
    : ActionCreator<CustomAction>
    = () : CustomAction => ({
        type: ACTION_TYPES.CLEAR_BASKET
    });

export const buyRequest
    : ActionCreator<BuyRequestAction>
    = (goods: GoodProps[]) : BuyRequestAction => ({
        type: ACTION_TYPES.BUY_REQUEST,
        goodIDs: goods.map((good: GoodProps) => good.id),
        totalPrice: goods.reduce((prev: number, curr: GoodProps) => prev + curr.price, 0)
    });

export const buySuccess
    : ActionCreator<BuySuccessAction>
    = (moneySpent: number, message?: string) : BuySuccessAction => ({
        type: ACTION_TYPES.BUY_SUCCESS,
        moneySpent,
        message: message || 'Goods bought successfully!'
    });

export const buyFailure
    : ActionCreator<BuyFailureAction>
    = (message?: string) : BuyFailureAction => ({
        type: ACTION_TYPES.BUY_FAILURE,
        message: message || 'Goods not bought...'
    });

export const buyGoods
    : ActionCreator<any>
    = (goodsInBasket: GoodInBasketProps[]) => {
        return (dispatch: Function, getState: Function) => {
            let state: StoreState = getState();

            let goods: GoodProps[] = goodsInBasket.map (
                (goodInBasket: GoodInBasketProps) => state.goods.find (
                    (item: GoodProps) => item.id === goodInBasket.id
                )
            );

            let paymentSum: number = goods.reduce (
                (prev: number, curr: GoodProps, index: number) =>
                    prev + curr.price * goodsInBasket[index].amount, 0
            );

            dispatch(buyRequest(goods));

            setTimeout(() => {
                if (state.payment.moneyLeft >= paymentSum) {
                    dispatch(buySuccess(paymentSum));
                    dispatch(clearBasket());
                } else {
                    dispatch(buyFailure('Not enough money...'));
                }
            }, 1000);
        };
    };