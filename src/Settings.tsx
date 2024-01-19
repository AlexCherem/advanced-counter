import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";
import s from './Setting.module.css'

type MapStateToPropsType = {
    maxValue: number
    startValue: number
}
type MapDispatchToPropsType = {
    setTestCount: (value: number) => void
    setMaxCount: (value: number) => void
}
type SettingsTypeProps = MapStateToPropsType & MapDispatchToPropsType

export const Settings: React.FC<SettingsTypeProps> = (props: SettingsTypeProps) => {
    const [inputMinValue, setInputMinValue] = useState(0)
    const [inputMaxValue, setInputMaxValue] = useState(5)
    const OnChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputMaxValue(e.currentTarget.valueAsNumber)
    }
    const OnChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputMinValue(e.currentTarget.valueAsNumber)
    }
    const onClickHandler = () => {
        props.setMaxCount(inputMaxValue)
        props.setTestCount(inputMinValue)
    }
    console.log('max value:' + props.maxValue)
    console.log('start value:' + props.startValue)
    const errorStatus = inputMaxValue <= inputMinValue || inputMinValue < 0
    const  disabled = inputMinValue >= inputMaxValue || inputMinValue < 0
    return (
        <div className='settings'>
            <div className='settingsInput'>
                <div className='maxValue'>
                    <div>
                        <span style={{fontSize: '20px'}}>max value: </span>
                    </div>
                    <div>
                        <input type='number'
                               value={inputMaxValue}
                               onChange={OnChangeMaxValue}
                               className={errorStatus ? s.maxValue : ''}/>
                    </div>
                </div>
                <div  className='maxValue'>
                    <div>
                        <span style={{fontSize: '20px'}}>start value: </span>
                    </div>
                    <div>
                        <input type='number'
                               value={inputMinValue}
                               onChange={OnChangeStartValue}
                               className={errorStatus ? s.maxValue : ''}/>
                    </div>
                </div>
            </div>
            <div className='buttonClass'>
                <Button callback={onClickHandler} title='Set' disabled={disabled}/>
            </div>
        </div>
    );
};

