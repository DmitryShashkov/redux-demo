import { Payment } from '../components/Payment';
import { buyGoods } from '../actions/index';
import { StoreState } from '../interfaces';
import { connect } from 'react-redux';

export const PaymentContainer = connect.call (
    Window,
    (initialState: StoreState) => ({
        ...initialState.payment
    }),
    {
        onBuyAttempt: buyGoods
    }
) (Payment);