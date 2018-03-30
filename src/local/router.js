// @flow

import type { Router, Action } from '../types'
import { setIn, from as fromJS } from 'seamless-immutable'

const initialRouterState = fromJS({
  location: {
    pathname: ''
  }
})

export default function(state: Router = initialRouterState, action: Action) {
  switch (action.type) {
    case 'router/PUSH_ROUTE': {
      return setIn(state, ['location'], action.location)
    }
    default:
      return state
  }
}
