# Remote Redux Boilerplate

WIP coming soon

This is a state machine based on [remote redux](https://github.com/seveibar/remote-redux).

## Features

* flowtype
* flow-runtime type checking
* Immutability via seamless-immutable
* Ready-to-go http redux server

## Concepts and Layout

Local reducers can be executed on the client.

Remote reducers must be executed on the server and can be asynchronous.

Directory      | Description
-------------- | ---------------------------------------------------
`src/actions`  | Contains all the actions w/ their flow types
`src/local`    | Contains all local reducers
`src/remote`   | Contains all remote reducers
`src/types.js` | Contains flow types for the root state
`src/server.js`| Methods for getting/using store on server
`src/client.js`| Methods for getting/using store on client

*Note: When installing packages intended for server use, you must install as a dependency. For the client, install everything as dev dependency.*
