// @flow

import actions from '../actions'
import configureStore from './configure-store'

// flowignore
jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000

test('complicated async test', async () => {
  const store = await configureStore()

  await store.dispatch(actions.router.pushRoute('/app/sign-up'))
  await store.dispatch(
    actions.signUp.updateSignUpField({
      field: 'email',
      value: 'test@example.com'
    })
  )
  await store.dispatch(
    actions.signUp.updateSignUpField({
      field: 'name',
      value: 'test'
    })
  )
  await store.dispatch(
    actions.signUp.updateSignUpField({
      field: 'password',
      value: 'testpass'
    })
  )
  await store.dispatch(
    actions.signUp.updateSignUpField({
      field: 'passwordRepeat',
      value: 'testpass'
    })
  )

  await store.dispatch(
    actions.signUp.localSignUp({
      name: 'test',
      email: 'test@example.com',
      password: 'testpass',
      passwordRepeat: 'testpass'
    })
  )

  await store.dispatch(actions.user.signOut())

  await store.dispatch(actions.router.pushRoute('/app'))

  await store.dispatch(
    actions.login.updateLoginField({
      field: 'email',
      value: 'test@example.com'
    })
  )
  await store.dispatch(
    actions.login.updateLoginField({
      field: 'password',
      value: 'testpass'
    })
  )
  await store.dispatch(
    actions.login.localLogin({
      email: 'test@example.com',
      password: 'testpass'
    })
  )

  await (store: any).waitForCompletion()

  const state: any = store.getState()

  expect(state.error).toBeFalsy()

  await (store: any).destroy()
})
