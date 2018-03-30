// @flow
// @flow-runtime assert

import type ReducerHandler from '../../handle'
import type { RootState, Action } from '../../../types'
import { setIn } from 'seamless-immutable'

export default (handle: ReducerHandler) => async (
  state: RootState,
  action: Action
) => {
  switch (action.type) {
    case 'SignUpPage/LOCAL_SIGN_UP': {
      const { email, name, password } = action

      const user = await handle.db.User.create({ email, name, password })
      await user.save()

      // Validate and create the user and route to dashboard
      return pushRoute(
        setIn(state, ['user', 'userId'], user.userId),
        '/app/dashboard'
      )
    }
    default:
      return state
  }
}
