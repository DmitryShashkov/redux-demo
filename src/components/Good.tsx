import { GoodProps } from '../interfaces';
import * as React from 'react';

export const Good: React.StatelessComponent<GoodProps> = (props: GoodProps) : JSX.Element => (
    <div onClick={ props.onSelect }>
        Good #{ props.id } - { props.description }
    </div>
);