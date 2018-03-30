// @flow

import reducer from './'
import { RootState } from '../types/assert'

test('reducer initializes state', () => {
  const initialState = reducer(null, {type: '@@INIT'})
  expect(initialState).toBeTruthy()
  RootState.assert(initialState)
})
