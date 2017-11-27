import ReactDom from 'react-dom'
import React from 'react'
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux'

import reducer from './reducer'

import App from './App'

import './style.css'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers()

const store = createStore(reducer, enhancer)

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('main'))

