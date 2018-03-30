// @flow

import RemoteHandle from '../../handle'
import reducer from './'
import localReducer from '../../../local'
import { RootState } from '../../../types/assert'
import actions from '../../../actions'

let handle
beforeAll(async () => {
  handle = new RemoteHandle()
  await handle.init()
  await handle.db.seed()
})

afterAll(async () => {
  await handle.destroy()
})

jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000

test('user should be able to sign up', async () => {
  const state = localReducer(null, { type: '@@INIT' })

  const newState = await reducer(handle)(
    state,
    actions.signUp.localSignUp({
      email: 'newuser@example.com',
      password: 'newuserpass',
      name: 'New User'
    })
  )

  RootState.assert(newState)
})
