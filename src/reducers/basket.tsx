import {
    AddToBasketAction, BasketState, CustomAction,
    GoodInBasketProps, RemoveFromBasketAction
} from '../interfaces';import {Reducer} from 'redux';
import { ACTION_TYPES } from '../constants';
import * as _ from 'lodash';

const INITIAL_STATE: BasketState = {
    goods: [],
    totalSum: 0
};

function processAddToBasket (state: BasketState, action: AddToBasketAction) : BasketState {
    let existingGood: GoodInBasketProps = _.find (
        state.goods,
        (item: GoodInBasketProps) => item.id === action.goodID
    );

    if (existingGood) {
        existingGood.amount++;
    } else {
        state.goods.push({
            id: action.goodID,
            amount: 1
        });
    }

    state.totalSum += action.goodPrice;

    return state;
}

function processRemoveFromBasket (state: BasketState, action: RemoveFromBasketAction) : BasketState {
    let existingGood: GoodInBasketProps = _.find (
        state.goods,
        (item: GoodInBasketProps) => item.id === action.goodID
    );

    if (existingGood) {
        existingGood.amount--;

        if (existingGood.amount <= 0) {
            state.goods = _.without(state.goods, existingGood);
        }

        state.totalSum -= action.goodPrice;
    }

    return state;
}

export const basket: Reducer<BasketState> = (
    oldState: BasketState = INITIAL_STATE,
    action: CustomAction
) : BasketState => {
    let newState : BasketState = {
        goods: oldState.goods.slice(),
        totalSum: oldState.totalSum
    };

    switch (action.type) {
        case ACTION_TYPES.ADD_TO_BASKET:
            newState = processAddToBasket(newState, action as AddToBasketAction);
            break;
        case ACTION_TYPES.REMOVE_FROM_BASKET:
            newState = processRemoveFromBasket(newState, action as RemoveFromBasketAction);
            break;
        case ACTION_TYPES.CLEAR_BASKET:
            newState = INITIAL_STATE;
            break;
        default: break;
    }

    return newState;
};