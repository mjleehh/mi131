import React from 'react'
import ReactDom from 'react-dom'

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import './style.css'
import reducer from './reducer'

import App from './App'

// ignore me for now
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers()

const store = createStore(reducer, enhancer)

const appElem = document.getElementById('main')
ReactDom.render(
    <Provider store={store}>
        <App appElement={appElem}/>
    </Provider>, appElem)
