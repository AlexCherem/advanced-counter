import React from 'react';
import {Button} from "./Button";

type DisplayTypeProps = {
    resetCount: () => void
    PlusCount: () => void
    disabled: boolean
}
export const Buttons = (props: DisplayTypeProps) => {
    const resetCount = () => {
        props.resetCount()
    }
    return (
        <div className='counterButton'>
            <Button callback={props.PlusCount}
                    title='incr'
                    disabled={props.disabled}
            />
            <Button callback={resetCount} title='reset'/>
        </div>
    );
};

