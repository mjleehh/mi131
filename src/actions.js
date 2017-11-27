import {createAction} from 'redux-actions'

export const addDigit = createAction('ADD_DIGIT')

export const removeDigit = createAction('REMOVE_DIGIT')

export const setDot = createAction('SET_DOT')

export const setOperator = createAction('SET_OPERATOR')

export const calculate = createAction('CALCULATE')
