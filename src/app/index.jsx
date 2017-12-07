import React from 'react'
import ReactDom from 'react-dom'

import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'

import axios from 'axios'

import './style.css'
import reducer from '../common/reducer'
import {fetchedNotes} from '../common/actions'
import notesListener from './notesListener'

import App from './App'

// ignore me for now
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(reduxThunk))

const store = createStore(reducer, enhancer)
notesListener(store)

axios.get('/api/notes').then(({data}) => {
    store.dispatch(fetchedNotes(data))

    const appElem = document.getElementById('main')
    ReactDom.render(
        <Provider store={store}>
            <App appElement={appElem}/>
        </Provider>, appElem)
}).catch(console.error)


