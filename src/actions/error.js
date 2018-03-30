// @flow

export const showError = (message: string) => ({
  type: 'error/SHOW_ERROR',
  message
})

export const closeError = () => ({
  type: 'error/CLOSE_ERROR'
})

export type Action =
  | $Call<typeof showError, *>
  | $Call<typeof closeError>
