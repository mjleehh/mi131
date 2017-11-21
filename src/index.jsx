import React from 'react'
import ReactDom from 'react-dom'

const names = [
    'phil',
    'pete',
    'bob'
]

const renderedNames = names.map(name => <li key={name}>{name}</li>)

ReactDom.render(<ol>{renderedNames}</ol>, document.getElementById("main"))
