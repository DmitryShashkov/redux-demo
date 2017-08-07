import { List } from 'immutable';
import { Action } from 'redux';

export interface CustomAction extends Action {
    type: number;
}

export interface AddToBasketAction extends CustomAction {
    goodID: string;
    goodPrice: number;
}

export interface RemoveFromBasketAction extends CustomAction {
    goodID: string;
    goodPrice: number;
}

export interface BuyRequestAction extends CustomAction {
    goodIDs: string[];
    totalPrice: number;
}

export interface BuySuccessAction extends CustomAction {
    moneySpent: number;
    message: string;
}

export interface BuyFailureAction extends CustomAction {
    message: string;
}

export interface GoodProps {
    id: string;
    price: number;
    description?: string;
    onSelect?: () => void;
}

export interface GoodsListProps {
    goods: GoodProps[];
    onItemSelect?: ( good: GoodProps ) => void;
}

export interface GoodInBasketProps {
    id: string;
    amount: number;
    onRemove?: () => void;
}

export interface BasketProps {
    goods: GoodInBasketProps[];
    totalSum: number;
    onItemRemove?: (good: GoodProps) => void;
    onEmpty?: () => void;
}

export interface PaymentComponentProps {
    moneyLeft: number;
    statusMessage: string;
    isInProgress: boolean;
    onBuyAttempt?: (goods: GoodInBasketProps[]) => void;
}

export interface PaymentComponentState {
    shouldDisplayMessage: boolean;
}

export interface GoodsState extends List<GoodProps> {}

export interface BasketState {
    goods: GoodInBasketProps[];
    totalSum: number;
}

export interface PaymentState {
    isInProgress: boolean;
    moneyLeft: number;
    statusMessage: string;
}

export interface StoreState {
    goods: GoodsState;
    basket: BasketState;
    payment: PaymentState;
}