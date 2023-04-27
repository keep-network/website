import {
  combineReducers,
  createStore as reduxCreateStore,
  applyMiddleware,
} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { put, takeLatest, all } from "redux-saga/effects"
import axios from "axios"

import { createEnum } from "./utils"

export const actionTypes = createEnum(
  "CREATE_SESSION",
  "CREATE_SESSION_SUCCESS",
  "CREATE_SESSION_FAILURE"
)

export const actions = {
  createSession: () => ({
    type: actionTypes.CREATE_SESSION,
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

export const reducers = {
  sessionCreated: sessionCreated,
}

const API_URL = "https://backend.keep.network"

const stripQuery = () => {
  window.history.pushState(null, "", window.location.href.split("?")[0])
}

export const getSessionCreatedFromState = (state) => state.sessionCreated

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

export const saga = function* () {
  yield all([takeLatest(actionTypes.CREATE_SESSION, createSession)])
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
