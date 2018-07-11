import 'bootstrap-css-only/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { connect, Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './App'
import { actions, getReducers, saga } from './redux'


const AppContainer = connect(
    (state) => ({
        sessionCreated: state.sessionCreated,
        ajaxRequestStates: state.ajaxRequestStates
    }),
    { ...actions}
)(App)

const reducers = getReducers(),
    sagaMiddleware = createSagaMiddleware(),
    reducer = combineReducers(reducers),
    store = createStore(
        reducer,
        composeWithDevTools(applyMiddleware(
            sagaMiddleware
        ))
    ),
    app = <Provider store={store}>
        <AppContainer />
    </Provider>

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(app, document.getElementById('root'))

    sagaMiddleware.run(saga)
    store.dispatch(actions.createSession())
})
