import uuidV4 from 'uuid/v4'
import {addMemo, clearMemos, hideAddMemo, removeMemo, setMemoListFilter, showAddMemo} from "./actions"

function initialState() {
    return {
        memos: [],
        showAddMemo: false,
        memoListFilter: '',
    }
}

export default function appReducer(state = initialState(), {type, payload}) {
    switch (type) {
        case addMemo.toString(): {
            const memoWithId = {id: uuidV4(), ...payload}
            const memos = [...state.memos, memoWithId]
            return {...state, memos}
        }
        case removeMemo.toString(): {
            const memos = state.memos.filter(memo => memo.id !== payload)
            return {...state, memos}
        }
        case clearMemos.toString(): {
            return {...state, memos: []}
        }
        case showAddMemo.toString(): {
            return {...state, showAddMemo: true}
        }
        case hideAddMemo.toString(): {
            return {...state, showAddMemo: false}
        }
        case setMemoListFilter.toString(): {
            return {...state, memoListFilter: payload}
        }
    }
    return state
}