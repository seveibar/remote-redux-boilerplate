// @flow

import { createStore, applyMiddleware, compose } from 'redux'
import { remoteReduxMiddleware, remoteReduxWrapReducer } from 'remote-redux'

import { getRemoteReducer } from '../remote'
import localReducer from '../local'

import type { RootState } from '../types'

export async function configureStore() {
  const remoteReducer = await getRemoteReducer()
  let queueCompleteCallbacks = []
  let activeRequests = 0
  const makeRequest = async (state, action, callback) => {
    activeRequests += 1
    callback(await remoteReducer(state, action))
    activeRequests -= 1
    if (activeRequests === 0) {
      for (const qccb of queueCompleteCallbacks) qccb()
      queueCompleteCallbacks = []
    }
  }

  const reducer = remoteReduxWrapReducer(localReducer)
  const store = createStore(
    reducer,
    null,
    compose(applyMiddleware(remoteReduxMiddleware(makeRequest, null, reducer)))
  )

  // define some useful testing methods
  ;(store: any).destroy = remoteReducer.destroy
  ;(store: any).waitForCompletion = async () => {
    if (activeRequests === 0) return
    await new Promise(resolve => {
      queueCompleteCallbacks.push(resolve)
    })
  }

  return store
}

export default configureStore
