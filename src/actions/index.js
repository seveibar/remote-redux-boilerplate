// @flow

import type { Action as RouterAction } from './router'
import type { Action as ErrorAction } from './error'

// prettier-ignore
export type Action =
  | ErrorAction
  | RouterAction
