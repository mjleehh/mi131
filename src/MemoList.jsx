import React from 'react'
import Memo from "./Memo"

export default class MemoList extends React.Component {
    render() {
        const renderedMemos = this.props.memos.map(memo => <Memo key={memo.id} {...memo} remove={this.props.remove} />)
        return <div>
            {renderedMemos}
        </div>
    }
}
