import { GoodsList } from '../components/GoodsList';
import { addToBasket } from '../actions/index';
import { StoreState } from '../interfaces';
import { connect } from 'react-redux';

export const GoodsListContainer = connect.call (
    Window,
    (initialState: StoreState) => ({
        goods: initialState.goods
    }),
    {
        onItemSelect: addToBasket
    }
) (GoodsList);