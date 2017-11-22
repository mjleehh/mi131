import React from 'react'
import {connect} from 'react-redux'

import Memo from "./Memo"


@connect(state => ({memos: state.memos, memoListFilter: state.memoListFilter}))
export default class MemoList extends React.Component {
    render() {
        const {memos, memoListFilter} = this.props
        const filteredMemos = memoListFilter
            ? memos.filter(memo => memo.title.toLowerCase().indexOf(memoListFilter.toLowerCase()) !== -1)
            : memos

        const renderedMemos = filteredMemos.map(memo => <Memo key={memo.id} {...memo} />)
        return <div>
            {renderedMemos}
        </div>
    }
}
