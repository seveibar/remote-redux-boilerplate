// @flow

import { combineReducers, compose } from 'redux'

import routerReducer from './router'
import errorReducer from './error'

const rootReducer = combineReducers({
  router: routerReducer,
  error: errorReducer
})

export default function(state: any, action: any) {
  return rootReducer(state || {}, action)
}
