import React from 'react'
import Modal from 'react-modal'
import uuidV4 from 'uuid/v4'

import MemoList from "./MemoList"
import localStorageKey from "./localStorageKey"
import store from 'store'
import AddMemo from "./AddMemo"


export default class App extends React.Component {
    constructor(props) {
        super(props)

        const memos = store.get(localStorageKey('memos')) || []
        const showAddMemo = false

        this.state = {memos, showAddMemo}

        const addMemo = memo => prevState => {
            const memoWithId = {id: uuidV4(), ...memo}
            return {memos: [...prevState.memos, memoWithId]}
        }

        const removeMemo = memoId => prevState => {
            const memos = prevState.memos.filter(memo => memo.id !== memoId)
            return {memos}
        }

        this.handleShowAdd = () => this.setState({showAddMemo: true})
        this.handleCancelAdd = () => this.setState({showAddMemo: false})


        this.handelAddMemo = memo => {
            this.setState({showAddMemo: false})
            this.setState(addMemo(memo))
        }
        this.handleRemoveMemo = memoId => this.setState(removeMemo(memoId))
        this.handleClearMemos = memoId => this.setState({memos: []})
    }

    render() {
        store.set(localStorageKey('memos'), this.state.memos)

        return <div>
            <Modal isOpen={this.state.showAddMemo} >
                <AddMemo onAdd={this.handelAddMemo} onCancel={this.handleCancelAdd}/>
            </Modal>
            <button onClick={this.handleShowAdd}>add memo</button>
            <button onClick={this.handleClearMemos}>clear memos</button>
            <MemoList memos={this.state.memos} remove={this.handleRemoveMemo}/>
        </div>
    }

}
