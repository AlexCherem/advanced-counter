import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';


type ButtonDefaultProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = Omit<ButtonDefaultProps, ''> & {
    callback: () => void,
    title: string,
}

export const Button: React.FC<ButtonPropsType> = ({title, callback, ...restProps}) => {
    return (
        <button onClick={callback}  {...restProps}>{title}</button>
    );
};