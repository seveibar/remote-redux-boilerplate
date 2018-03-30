// @flow

// routing
export type RouteLocation = {
  pathname: string
}

export const pushRoute = (location: RouteLocation | string) =>
  typeof location === 'string'
    ? {
        type: 'router/PUSH_ROUTE',
        location: { pathname: location }
      }
    : {
        type: 'router/PUSH_ROUTE',
        location
      }

export type Action = $Call<typeof pushRoute, *>
