import {handleActions} from 'redux-actions'
import performOperation from './performOperation'

import {
    addDigit, calculate,
    removeDigit, setDot, setOperator,
} from './actions'

const initialValue = '0'

function initialState() {
    return {
        number: '0',
        acc: null,
    }
}

function addDigitReducer(state, {payload: digit}) {
    const prevNumber = state.number
    const number = prevNumber === initialValue
        ? `${digit}`
        : `${prevNumber}${digit}`
    return {...state, number}
}

function removeDigitReducer(state, action) {
    const prevNumber = state.number
    let number = prevNumber.length < 2
        ? initialValue
        : prevNumber.slice(0, -1)
    return {...state, number}
}

function setDotReducer(state, action) {
    const prevNumber = state.number
    let number = prevNumber.indexOf('.') !== -1
        ? prevNumber
        :  `${prevNumber}.`
    return {...state, number}
}

function calculateReducer(state) {
    const {acc, number} = state
    if (acc) {
        const res = performOperation(acc, number)
        return {
            ...state,
            acc: null,
            number: res,
        }
    }
    return state
}

function setOperatorReducer(state, {payload: operator}) {
    const {acc, number} = state
    const res = acc
        ? performOperation(acc, number)
        : number
    return {
        ...state,
        acc: {
            number: res,
            operator: operator,
        },
        number: initialValue,
    }
}

export default handleActions({
        [addDigit]: addDigitReducer,
        [removeDigit]: removeDigitReducer,
        [setDot]: setDotReducer,
        [setOperator]: setOperatorReducer,
        [calculate]: calculateReducer,
    },
    initialState())