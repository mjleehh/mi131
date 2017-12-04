import React from 'react'
import {connect} from 'react-redux'
import Modal from 'react-modal'

import AddNote from './AddNote'
import EditNote from './EditNote'
import NoteList from './NoteList'
import {closeModal, showAddNote} from "../common/actions"

const modalStyle = {
    content: {
        background: 'black',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    }
}

@connect(state => ({modal: state.modal}))
export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.handleAdd = event => {
            this.props.dispatch(showAddNote())
        }

        this.handleCloseModal = event => this.props.dispatch(closeModal())
    }

    renderModalBody() {
        const {modal} = this.props
        if (!modal) {
            return ''
        }

        switch (modal.type) {
            case 'create':
                return <AddNote/>
            case 'modify': {
                return <div>
                    <div className="icon" onClick={this.handleCloseModal}>&#x274c;</div>
                    <EditNote id={modal.id}/>
                </div>
            }
        }
    }

    render() {
        const {appElement, modal} = this.props

        return <div>
            <Modal style={modalStyle}
                   isOpen={!!modal}
                    appElement={appElement}>
                {this.renderModalBody()}
            </Modal>
            <div onClick={this.handleAdd}>+</div>
            <NoteList/>
        </div>
    }
}