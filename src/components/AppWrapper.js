import React from "react"
import { Provider } from "react-redux"
import createSagaMiddleware from "redux-saga"

import { actions, createStore, saga } from "../redux"

export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(sagaMiddleware)

  sagaMiddleware.run(saga)
  store.dispatch(actions.createSession())

  return <Provider store={store}>{element}</Provider>
}
