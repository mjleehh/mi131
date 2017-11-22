import React from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'

import MemoList from "./MemoList"
import AddMemo from "./AddMemo"
import {clearMemos, setMemoListFilter, showAddMemo} from "./actions"


@connect(state => ({showAddMemo: state.showAddMemo, memoListFilter: state.memoListFilter}))
export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.handleShowAdd = () => this.props.dispatch(showAddMemo())
        this.handleClearMemos = () => this.props.dispatch(clearMemos())
        this.handleChangeFilter = event => this.props.dispatch(setMemoListFilter(event.target.value))
    }

    render() {
        const {showAddMemo, memoListFilter} = this.props
        return <div>
            <Modal isOpen={showAddMemo} >
                <AddMemo />
            </Modal>
            <div>
                <button onClick={this.handleShowAdd}>add memo</button>
                <button onClick={this.handleClearMemos}>clear memos</button>
            </div>
            <div>
                filter: <input type="text" value={memoListFilter} onChange={this.handleChangeFilter}/>
            </div>
            <MemoList />
        </div>
    }

}
