import React from 'react';
import {Buttons} from "./Buttons";
import {DEFAULT_TEXT} from "./Redux/AppWithRedux";

type CounterTypeProps = {
    resetCount: () => void
    PlusCount: () => void
    maxValue: number
    count: number
}
export const Counter = (props: CounterTypeProps) => {
    const disabled =   props.count >= props.maxValue

    console.log('settings',props.count)
    console.log('disabled',disabled)

    return (
        <div className='counter'>
            <div className='counterInput'>
                <span style={{fontSize: '40px'}}>{props.count}</span>
            </div>
            <Buttons
                resetCount={props.resetCount}
                PlusCount={props.PlusCount}
                disabled={disabled}
            />
        </div>
    );
};

