import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers/index';
import { Provider, Store } from 'react-redux';
import { StoreState } from './interfaces';
import { App } from './components/App';
import { goods } from './data/goods';
import { List } from 'immutable';
import thunk from 'redux-thunk';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

const store: Store<StoreState> = createStore (
    rootReducer,
    {
        goods: List(goods),
        basket: { goods: [], totalSum: 0 },
        payment: { isInProgress: false, moneyLeft: 1000, statusMessage: '' }
    },
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
