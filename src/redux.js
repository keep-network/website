import { put, call, select, takeLatest, take, all } from 'redux-saga/effects'
import request from 'superagent'

import { Enum } from './utils'


export const actionTypes = Enum(
    'CREATE_SESSION',
    'CREATE_SESSION_SUCCESS',
    'CREATE_SESSION_FAILURE',
    'SIGNUP_DISCORD',
    'SIGNUP_MAILING_LIST',
    'SIGNUP_MAILING_LIST_SUCCESS',
    'SIGNUP_MAILING_LIST_FAILURE'
)

export const actions = {
    createSession: () => ({
        type: actionTypes.CREATE_SESSION
    }),
    signupDiscord: ({ email }) => ({
        type: actionTypes.SIGNUP_DISCORD,
        payload: { email }
    }),
    signupMailingList: ({ email, discord_signup }) => ({
        type: actionTypes.SIGNUP_MAILING_LIST,
        payload: { email, discord_signup }
    })
}

export const sessionCreated = (state = false, action) => {
    switch (action.type) {
    case actionTypes.CREATE_SESSION_SUCCESS:
        return true
    case actionTypes.CREATE_SESSION_FAILURE:
        return false
    default:
        return state
    }
}

export const ajaxRequestStates = (state = {}, action) => {
    let newState = Object.assign({}, state)

    const assignData = (isSuccess, currAction) => {
        newState.currentRequest = currAction
        return {
            success: isSuccess,
            ...action
        }
    }

    switch (action.type) {
    case actionTypes.CREATE_SESSION_SUCCESS:
        newState.CREATE_SESSION = assignData(true, 'CREATE_SESSION')
        return newState
    case actionTypes.CREATE_SESSION_FAILURE:
        newState.CREATE_SESSION = assignData(false, 'CREATE_SESSION')
        return newState
    case actionTypes.SIGNUP_MAILING_LIST_SUCCESS:
        newState.SIGNUP_MAILING_LIST = assignData(true, 'SIGNUP_MAILING_LIST')
        return newState
    case actionTypes.SIGNUP_MAILING_LIST_FAILURE:
        newState.SIGNUP_MAILING_LIST = assignData(false, 'SIGNUP_MAILING_LIST')
        return newState
    default:
        return state
    }
}

export const getReducers = function () {
    return {
        sessionCreated: sessionCreated,
        ajaxRequestStates: ajaxRequestStates
    }
}

const API_URL = 'https://backend.keep.network'

const stripQuery = () => {
    window.history.pushState(null, '', window.location.href.split('?')[0])
}

export const getSessionCreatedFromState = (state) => state.sessionCreated

function* waitFor(selector, expectedValue) {
    let stateSlice = yield select(selector)
    while (stateSlice !== expectedValue) {
        yield take('*')
        stateSlice = yield select(selector)
    }
    return
}

function* createSession(action) {
    try {
        const req = request.post(`${API_URL}/session`)
            .send({ url: window.location.href, referrer: document.referrer })

        let response = yield req
        yield put({ type: actionTypes.CREATE_SESSION_SUCCESS, response })
        stripQuery()
    } catch (error) {
        yield put({ type: actionTypes.CREATE_SESSION_FAILURE, error })
        console.error(error)
    }
}

function* signupDiscord(action) {
    yield put(actions.signupMailingList({ discord_signup: true, ...action.payload }))
}

function* signupMailingList(action) {
    try {
        yield call(waitFor, getSessionCreatedFromState, true)
        const req = request.post(`${API_URL}/mailing-list/signup`)
                .send(action.payload)
        const response = yield req
        yield put({ type: actionTypes.SIGNUP_MAILING_LIST_SUCCESS, response })
    } catch (error) {
        yield put({ type: actionTypes.SIGNUP_MAILING_LIST_FAILURE, error })
        console.error(error)
    }
}

export const saga = function*() {
    yield all([
        takeLatest(actionTypes.CREATE_SESSION, createSession),
        takeLatest(actionTypes.SIGNUP_DISCORD, signupDiscord),
        takeLatest(actionTypes.SIGNUP_MAILING_LIST, signupMailingList)
    ])
}

export default {
    saga,
    getReducers,
    actions,
    actionTypes
}
