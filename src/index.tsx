import * as React from "react";
import * as ReactDOM from "react-dom";

import {rootReducer} from "./reducers/index";
import {applyMiddleware, createStore} from "redux";
import {Provider, Store} from "react-redux";
import {GoodProps} from "./interfaces";
import {App} from "./components/App";
import {List} from "immutable";

import thunk from 'redux-thunk';

const goods: GoodProps[] = [{
    id: '001',
    price: 100,
    description: 'Good #1'
}, {
    id: '002',
    price: 200,
    description: 'Good #2'
}, {
    id: '003',
    price: 300,
    description: 'Good #3'
}];

const store: Store<any> = createStore(rootReducer, { goods: List(goods) }, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("example")
);
