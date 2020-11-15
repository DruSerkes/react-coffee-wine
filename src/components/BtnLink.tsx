import * as React from 'react';
import { BtnLinkProps } from '../types/btn-link';


export const BtnLink = ({ text, color, link }: BtnLinkProps) => {
    return (
        <button style={{ backgroundColor: color }} className="BtnLink">
            <a href={link}>
                {text}
            </a>
        </button>
    )
}