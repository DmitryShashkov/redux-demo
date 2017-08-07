import { GoodProps, GoodsListProps } from '../interfaces';
import { Good } from './Good';
import * as React from 'react';

export const GoodsList: React.StatelessComponent<GoodsListProps> = (props: GoodsListProps) : JSX.Element => (
    <div>
        Goods List
        { props.goods.map((good: GoodProps, index: number) => (
            <Good
                key={index}
                {...good}
                onSelect={() => { props.onItemSelect(good); }}
            />
        ))}
    </div>
);