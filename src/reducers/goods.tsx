import { CustomAction, GoodsState } from '../interfaces';
import { Reducer } from 'redux';
import {List} from "immutable";

export const goods
    : Reducer<GoodsState> 
    = (state: GoodsState = List(), action: CustomAction) : GoodsState => state;