import { CustomAction, GoodsState } from '../interfaces';
import { List } from 'immutable';
import { Reducer } from 'redux';

export const goods
    : Reducer<GoodsState> 
    = (state: GoodsState = List(), action: CustomAction) : GoodsState => state;