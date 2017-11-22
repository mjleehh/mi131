import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import appReducer from './reducer'
import App from "./App"

const appStore = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDom.render(
    <Provider store={appStore}>
        <App/>
    </Provider>,
    document.getElementById("main"))
