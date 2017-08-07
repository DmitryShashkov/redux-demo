import {BuyFailureAction, BuySuccessAction, CustomAction, PaymentState} from "../interfaces";
import {Reducer} from "redux";
import {ACTION_TYPES} from "../constants";

const INITIAL_STATE = {
    isInProgress: false,
    moneyLeft: 1000,
    statusMessage: ''
};

function processBuyRequest (newState: PaymentState) : PaymentState {
    newState.isInProgress = true;
    newState.statusMessage = 'Trying to pay...';

    return newState;
}

function processBuySuccess (newState: PaymentState, action: BuySuccessAction) : PaymentState {
    newState.isInProgress = false;
    newState.statusMessage = action.message;
    newState.moneyLeft -= action.moneySpent;

    return newState;
}

function processBuyFailure (newState: PaymentState, action: BuyFailureAction) : PaymentState {
    newState.isInProgress = false;
    newState.statusMessage = action.message;

    return newState;
}

export const payment
    : Reducer<PaymentState>
    = (state: PaymentState = INITIAL_STATE, action: CustomAction) : PaymentState => {
        // noinspection TypeScriptValidateTypes
        let newState: PaymentState = { ...state };

        switch (action.type) {
            case ACTION_TYPES.BUY_REQUEST:
                newState = processBuyRequest(newState);
                break;
            case ACTION_TYPES.BUY_SUCCESS:
                newState = processBuySuccess(newState, action as BuySuccessAction);
                break;
            case ACTION_TYPES.BUY_FAILURE:
                newState = processBuyFailure(newState, action as BuyFailureAction);
                break;
        }

        return newState;
    };