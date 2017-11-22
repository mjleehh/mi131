import React from 'react'
import ReactDom from 'react-dom'
import App from "./App"

const names = [
    'phil',
    'pete',
    'bob'
]

const renderedNames = names.map(name => <li key={name}>{name}</li>)

ReactDom.render(<App/>, document.getElementById("main"))
