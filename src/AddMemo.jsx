import React from 'react'

export default class AddMemo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {title: '', text: ''}

        this.handleTitleChange = event => this.setState({title: event.target.value})
        this.handleTextChange = event => this.setState({text: event.target.value})

        this.handleAdd = event => {
            const {onAdd} = this.props
            if (onAdd) {
                onAdd(this.state)
            }
            event.preventDefault()
        }

        this.handleCancel = () => {
            const {onCancel} = this.props
            if (onCancel) {
                onCancel()
            }
        }
    }

    render() {
        const {title, text} = this.state

        return <form onSubmit={this.handleAdd}>
            <div>
                <h3>title: </h3>
                <input type="text" value={title} onChange={this.handleTitleChange}/>
            </div>
            <div>
                <h3>text:</h3>
                <input type="text" value={text} onChange={this.handleTextChange}/>
            </div>
            <div>
                <input type="submit" value="add" />
                <button onClick={this.handleCancel}>cancel</button>
            </div>
        </form>
    }
}
