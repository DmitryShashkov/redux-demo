import { GoodProps } from '../interfaces';
import * as React from 'react';

export const Good: React.StatelessComponent<GoodProps> = (props: GoodProps) : JSX.Element => (
    <div className="good-holder" onClick={ props.onSelect }>
        <div className="index"> #{ props.id } </div>
        <img className="icon" src="http://bit.ly/2wqvMLW" />
        <div className="description"> { props.description } </div>
    </div>
);