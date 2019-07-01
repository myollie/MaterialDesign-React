import { CSSProperties } from 'react';
export interface HTMLProps {
    className?: string;
}
export interface IconProps extends HTMLProps {
    path: string;
    title?: string | null;
    description?: string | null;
    size?: number | string | null;
    color?: string | null;
    horizontal?: boolean;
    vertical?: boolean;
    rotate?: number;
    spin?: boolean | number;
    style?: CSSProperties;
    inStack?: boolean;
}
