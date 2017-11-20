import React from 'react'
import ReactDom from 'react-dom'

function RootComponent(props) {
    console.log('render root component')
    return <h1>Root Component Body</h1>
}

ReactDom.render(<RootComponent />, document.getElementById("main"))
