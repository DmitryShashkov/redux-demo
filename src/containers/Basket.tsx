import { clearBasket, removeFromBasket} from '../actions/index';
import { Basket } from '../components/Basket';
import { StoreState } from '../interfaces';
import { connect } from 'react-redux';

export const BasketContainer = connect.call (
    Window,
    (state: StoreState) => ({
        goods: state.basket.goods,
        totalSum: state.basket.totalSum
    }),
    {
        onEmpty: clearBasket,
        onItemRemove: removeFromBasket
    }
) (Basket);