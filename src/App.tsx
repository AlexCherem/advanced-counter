import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";


export const DEFAULT_TEXT = 'Enter values and press set'
function App() {
    const [startValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [count, setCount] = useState(0)
    const [error, setError] = useState('')
    const [text, setText] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [testCount, setTestCount] = useState<string | number>(DEFAULT_TEXT)


    const changeMaxValue = (value: number) => {
        setMaxValue(value)
        setError(startValue >= value ? 'Incorrect value' : '')
        setTestCount(DEFAULT_TEXT)
    }
    const changeMinValue = (value: number) => {
        setMinValue(value)
        setError(maxValue <= value || value < 0 ? 'error' : '')
        setTestCount(DEFAULT_TEXT)
    }
    const PlusCount = () => {
        setTestCount(prev => +prev + 1)
    }
    const resetCount = () => {
        setCount(count)
    }
    const setMaxCount = (value: number)=>{

    }

    return (
        <div className="App">
            <Settings

                // @ts-ignore:
                text={text}
                disabled={disabled}
                // setDisabled={setDisabled}
                error={error}
                maxValue={maxValue}
                startValue={startValue}
                // changeMaxValue={changeMaxValue}
                // changeMinValue={changeMinValue}
                // resetCount={setCount}
                setTestCount={setTestCount}
                setMaxCount={setMaxCount}
            />
            <Counter
                maxValue={maxValue}
                count={count}
                PlusCount={PlusCount}
                resetCount={resetCount}
            />
        </div>
    );
}

export default App
