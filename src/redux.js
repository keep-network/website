import {
  combineReducers,
  createStore as reduxCreateStore,
  applyMiddleware,
} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { put, call, select, takeLatest, take, all } from "redux-saga/effects"
import axios from "axios"

import { createEnum } from "./utils"

export const actionTypes = createEnum(
  "CREATE_SESSION",
  "CREATE_SESSION_SUCCESS",
  "CREATE_SESSION_FAILURE",
  "SIGNUP_MAILING_LIST",
  "SIGNUP_MAILING_LIST_SUCCESS",
  "SIGNUP_MAILING_LIST_FAILURE"
)

export const actions = {
  createSession: () => ({
    type: actionTypes.CREATE_SESSION,
  }),
  signupMailingList: ({ email, discordSignup }) => ({
    type: actionTypes.SIGNUP_MAILING_LIST,
    payload: { email, discordSignup },
  }),
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
  const newState = Object.assign({}, state)

  const assignData = (isSuccess, currAction) => {
    newState.currentRequest = currAction
    return {
      success: isSuccess,
      ...action,
    }
  }

  switch (action.type) {
    case actionTypes.CREATE_SESSION_SUCCESS:
      newState.CREATE_SESSION = assignData(true, "CREATE_SESSION")
      return newState
    case actionTypes.CREATE_SESSION_FAILURE:
      newState.CREATE_SESSION = assignData(false, "CREATE_SESSION")
      return newState
    case actionTypes.SIGNUP_MAILING_LIST_SUCCESS:
      newState.SIGNUP_MAILING_LIST = assignData(true, "SIGNUP_MAILING_LIST")
      return newState
    case actionTypes.SIGNUP_MAILING_LIST_FAILURE:
      newState.SIGNUP_MAILING_LIST = assignData(false, "SIGNUP_MAILING_LIST")
      return newState
    default:
      return state
  }
}

export const reducers = {
  sessionCreated: sessionCreated,
  ajaxRequestStates: ajaxRequestStates,
}

const API_URL = "https://backend.keep.network"

const stripQuery = () => {
  window.history.pushState(null, "", window.location.href.split("?")[0])
}

export const getSessionCreatedFromState = (state) => state.sessionCreated

function* waitFor(selector, expectedValue) {
  let stateSlice = yield select(selector)
  while (stateSlice !== expectedValue) {
    yield take("*")
    stateSlice = yield select(selector)
  }
  return
}

function* createSession(action) {
  try {
    const req = axios.post(`${API_URL}/session`, {
      url: window.location.href,
      referrer: document.referrer,
    })

    const response = yield req
    yield put({ type: actionTypes.CREATE_SESSION_SUCCESS, response })
    stripQuery()
  } catch (error) {
    yield put({ type: actionTypes.CREATE_SESSION_FAILURE, error })
    console.error(error)
  }
}

function* signupMailingList(action) {
  try {
    yield call(waitFor, getSessionCreatedFromState, true)
    const req = axios.post(`${API_URL}/mailing-list/signup`, {
      email: action.payload.email,
      discord_signup: action.payload.discordSignup,
    })
    const response = yield req
    yield put({ type: actionTypes.SIGNUP_MAILING_LIST_SUCCESS, response })
  } catch (error) {
    yield put({ type: actionTypes.SIGNUP_MAILING_LIST_FAILURE, error })
    console.error(error)
  }
}

export const saga = function* () {
  yield all([
    takeLatest(actionTypes.CREATE_SESSION, createSession),
    takeLatest(actionTypes.SIGNUP_MAILING_LIST, signupMailingList),
  ])
}

const reducer = combineReducers(reducers)

export const createStore = (middleware) => {
  return reduxCreateStore(
    reducer,
    composeWithDevTools(applyMiddleware(middleware))
  )
}

export default {
  actions,
  actionTypes,
  createStore,
  saga,
}
