import { GoodProps, GoodsListProps } from '../interfaces';
import { Good } from './Good';
import * as React from 'react';

export const GoodsList: React.StatelessComponent<GoodsListProps> = (props: GoodsListProps) : JSX.Element => (
    <div className="goods-list">
        <div className="title"> Goods List </div>
        { props.goods.map((good: GoodProps, index: number) => (
            <Good
                key={index}
                {...good}
                onSelect={() => { props.onItemSelect(good); }}
            />
        ))}
    </div>
);