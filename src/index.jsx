import React from 'react'
import ReactDom from 'react-dom'

class NameInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {name: '', surname: ''}

        this.handleNameChange = event => this.setState({name: event.target.value})
        this.handleSurnameChange = event => this.setState({surname: event.target.value})
        this.handleSubmit = event => {
            const {onChange} = this.props
            if (onChange) {
                onChange(Object.assign({}, this.state))
            }
            event.preventDefault()
        }
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <div>
                <label>name</label>
                <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
            </div>
            <div>
                <label>surname</label>
                <input type="text" value={this.state.surname} onChange={this.handleSurnameChange}/>
            </div>
            <input type="submit" value="Ok" />
        </form>
    }
}

const handleNameInput = name => console.log('name set to:', name.name, name.surname)

ReactDom.render(<NameInput onChange={handleNameInput} />, document.getElementById("main"))
