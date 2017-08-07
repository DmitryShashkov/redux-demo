import { combineReducers, Reducer } from 'redux';
import { StoreState } from '../interfaces';
import { payment } from './payment';
import { basket } from './basket';
import { goods } from './goods';

export const rootReducer
    : Reducer<StoreState> 
    = combineReducers({ basket, goods, payment });