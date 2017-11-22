import {createAction} from 'redux-actions'

export const addMemo = createAction('ADD_MEMO')

export const removeMemo = createAction('REMOVE_MEMO')

export const clearMemos = createAction('CLEAR_MEMOS')

export const showAddMemo = createAction('SHOW_ADD_MEMO')

export const hideAddMemo = createAction('HIDE_ADD_MEMO')

export const setMemoListFilter = createAction('SET_MEMO_LIST_FILTER')
