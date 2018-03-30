// @flow

import type { Action } from '../types'
import { from as fromJS, setIn } from 'seamless-immutable'

export default function(state: ?{ message: string } = null, action: Action) {
  switch (action.type) {
    case 'error/CLOSE_ERROR': {
      return null
    }
    case 'error/SHOW_ERROR': {
      return setIn(state || {}, ['message'], action.message)
    }
    default:
      return state
  }
}
