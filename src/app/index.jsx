import React from 'react'
import ReactDom from 'react-dom'

import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'


import './style.css'
import reducer from './state/reducer'

import {fetchUser} from "./state/actions"
import Listener from './state/Listener'

import LoginFrame from './ui/LoginFrame'

// ignore me for now
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(reduxThunk))

const store = createStore(reducer, enhancer)
Listener.setStore(store)

store.dispatch(fetchUser())

const appElem = document.getElementById('main')
ReactDom.render(
    <Provider store={store}>
        <LoginFrame appElement={appElem}/>
    </Provider>, appElem)

/*
axios.get('/api/notes').then(({data}) => {

}).catch(console.error)
*/