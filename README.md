# Redux React Blog App

Creating this Blog App to learn about the connection of Redux & React, Reducers, External API and `redux-thunk` middleware

Kowalski, are you there?

## App Summary
- With this Blog Application, I used Redux Thunk imported in the root `index.js` file
- I wired up redux-thunk to the Redux Store through `applyMiddleware(thunk)` in the `createStore` call
- Any time an Action was Dispatched, it is sent to redux-thunk, then sent to all Reducers
- redux-thunk changed the rules of the Action Creators
  - No longer had to create Action Creators that only returned an Action Object
  - Could now return an Action Function
  - This gives better control of changing/getting information out of Redux Store
  - Any time an API requests is made, redux-thunk will be frequently used to make the requests
