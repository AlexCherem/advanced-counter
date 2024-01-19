import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer";

export const rootReducerCombine =  combineReducers(
    {
        counter: counterReducer,
    }
)

export type rootReducerCombineType = ReturnType<typeof rootReducerCombine>

export const store = legacy_createStore(rootReducerCombine)

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;


