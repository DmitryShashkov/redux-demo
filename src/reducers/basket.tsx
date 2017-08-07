import {Reducer} from "redux";
import {ACTION_TYPES} from "../constants";
import {AddToBasketAction, BasketState, CustomAction, GoodInBasketProps, RemoveFromBasketAction} from "../interfaces";
import * as _ from 'lodash';

const INITIAL_STATE: BasketState = {
    goods: [],
    totalSum: 0
};

export const basket: Reducer<BasketState> = (state: BasketState = INITIAL_STATE, action: CustomAction) : BasketState => {
    // todo: immutable pls
    let newState : BasketState = {
        goods: state.goods.slice(),
        totalSum: state.totalSum
    };

    let castAction: any;
    let existingGood: any;

    switch (action.type) {
        case ACTION_TYPES.ADD_TO_BASKET:
            // todo: separate into function
            castAction = action as AddToBasketAction;
            existingGood = _.find(newState.goods, (item: GoodInBasketProps) => item.id === castAction.goodID);

            if (existingGood) {
                existingGood.amount++;
            } else {
                newState.goods.push({
                    id: castAction.goodID,
                    amount: 1
                });
            }

            newState.totalSum += castAction.goodPrice;
            break;

        case ACTION_TYPES.REMOVE_FROM_BASKET:
            castAction = action as RemoveFromBasketAction;
            existingGood = _.find(newState.goods, (item: GoodInBasketProps) => item.id === castAction.goodID);

            if (existingGood) {
                existingGood.amount--;

                if (existingGood.amount <= 0) {
                    newState.goods = _.without(newState.goods, existingGood);
                }

                newState.totalSum -= castAction.goodPrice;
            }

            break;

        case ACTION_TYPES.CLEAR_BASKET:
            newState = INITIAL_STATE;
            break;

        default: break;
    }

    return newState;
};