// @flow

import Handle from './handle'
import reducerHandlers from './reducers'

export async function getRemoteReducer() {
  const handle = new Handle()
  await handle.init()
  const reducers = []
  for (const reducerHandler of reducerHandlers) {
    reducers.push(await reducerHandler(handle))
  }
  const func = async (state, action) => {
    for (const reducer of reducers) {
      state = await reducer(state, action)
    }
    return state
  }
  func.destroy = async () => await handle.destroy()
  return func
}

export default getRemoteReducer
