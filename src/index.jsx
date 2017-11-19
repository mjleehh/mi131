import React from 'react'
import ReactDom from 'react-dom'

class RootComponent extends React.Component {
    render() {
        console.log('render root component')
        return <h1>Root Component Body</h1>
    }
}


ReactDom.render(<RootComponent />, document.getElementById("main"))
