export const CHANGE_MAX_VALUE = "CHANGE_MAX_VALUE"
export const INCREMENT_COUNT = "INCREMENT_COUNT"
export const RESET_COUNT = "RESET_COUNT"
export const ERROR_MESSAGE = "ERROR_MESSAGE"
export const CHANGE_SET_MIN_MAX_VALUE = "CHANGE_SET_MIN_MAX_VALUE"


export type initialStateTypeReducer =
    changeMaxValueACType
    | incrementCountType
    | resetCountType
    |changeSetMinMaxValue
    | setErrorMessageACCType


export type changeMaxValueACType = {
    type: typeof CHANGE_MAX_VALUE
    payload: number
}
export const changeMaxValueAC = (value: number) => {
    return {
        type: CHANGE_MAX_VALUE,
        payload: value
    } as const
}


type changeSetMinMaxValue  = {
    type: typeof CHANGE_SET_MIN_MAX_VALUE
    payload: number
}

export const changeSetMinMaxValueAC =(value: number)=> {
    return{
        type: CHANGE_SET_MIN_MAX_VALUE,
        payload: value
    } as const
}

 type incrementCountType = {
    type: typeof INCREMENT_COUNT
}
export const incrementCountAC = () => {
    return {
        type: INCREMENT_COUNT,
    } as const
}

 type resetCountType = {
    type: typeof RESET_COUNT
}
export const resetCountAC = () => {
    return {
        type: RESET_COUNT,
    } as const
}
//
export type setErrorMessageACCType = {
    type: typeof ERROR_MESSAGE
}
export const setErrorMessageAC = () => {
    return {
        type: ERROR_MESSAGE,
    } as const
}
//
// export type setTestCountACType = {
//     type: typeof TEST_COUNT
//     payload: number
// }
// export const setTestCountAC = (value: number) => {
//     return {
//         type: typeof TEST_COUNT,
//         payload: value
//     } as const
// }