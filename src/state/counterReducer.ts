import {
    CHANGE_MAX_VALUE,
    CHANGE_SET_MIN_MAX_VALUE,
    ERROR_MESSAGE,
    INCREMENT_COUNT,
    initialStateTypeReducer,
    RESET_COUNT
} from "./actions-counter";
import {DEFAULT_TEXT} from "../Redux/AppWithRedux";

const  initialState = {
    startValue: 0,
    maxValue: 0,
    count: 0,
}

export const counterReducer = (state = initialState, action: initialStateTypeReducer) => {
    switch (action.type) {
        case CHANGE_MAX_VALUE:
            return {
                ...state,
                maxValue: action.payload,
            }
        case CHANGE_SET_MIN_MAX_VALUE:{
            return {
                ...state,
                startValue: action.payload,
                count: action.payload,
            }
        }
        case INCREMENT_COUNT:{
            return {
                ...state,
                count: state.count +1,

            }
        }
        case RESET_COUNT: {
            return {
                ...state,
                count: state.startValue
            }
        }
        case ERROR_MESSAGE:{
            return {
                ...state,
                text:  'I am a Programmer'
            }
        }
        default:
            return state
    }
}


