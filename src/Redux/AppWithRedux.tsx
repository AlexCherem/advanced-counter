import React from 'react';
import '../App.css';
import {Counter} from "../Counter";
import {useDispatch, useSelector} from "react-redux";
import {changeMaxValueAC, changeSetMinMaxValueAC, incrementCountAC, resetCountAC} from '../state/actions-counter';
import {AppDispatchType, rootReducerCombineType} from "../state/store";
import {Settings} from "../Settings";

export const DEFAULT_TEXT = 'Enter values and press set'
function AppWithRedux() {
    const dispatch: AppDispatchType = useDispatch();
    const { startValue,
        maxValue,
        count,
      } = useSelector((state: rootReducerCombineType ) => state.counter);

    const PlusCountHandler = () => {
        dispatch(incrementCountAC());
    };
    const resetCountHandler = () => {
        dispatch(resetCountAC());
    };

    const setTestCount = (value: number) => {
       dispatch(changeSetMinMaxValueAC(value))

    };
    const setMaxCount = (value: number)=>{
        dispatch(changeMaxValueAC(value))
    }

    return (
        <div className="App">
            <Settings
                maxValue={maxValue}
                startValue={startValue}
                setTestCount={setTestCount}
                setMaxCount={setMaxCount}
            />
            <Counter
                maxValue={maxValue}
                count={count}
                PlusCount={PlusCountHandler}
                resetCount={resetCountHandler}
            />
        </div>
    );
}
export default AppWithRedux
