# Overview of libraries/dependencies

- REDUX: The actual library itself
- REACT-REDUX: Integration layer between React and Redux
- AXIOS: Helps make network requests with external APIs(not technically required, can use fetch and .then)
- REDUX-THUNK: Middleware to help make requests in a Redux application

## COMPONENTS BUILD
- [x] Build PostList and attach it to App

## General Data Loading with Redux
  1. Components rendered onto screen
  2. `componentDidMount` lifecycle gets called
  3. Call action creator from `componentDidMount`
  4. Action Creator runs code to make API request via Axios
  5. API responds with data
  6. Action Creator returns `action` with fetched data on the `payload` property
  7. A Reducer sees the Action, returns data off the `payload`
  8. Because new State object it generated, redux/react-redux causes App to re-render

- Steps 1-3
  - Components are generally responsible for fetching data they need by calling an action creator

- Steps 4-6
  - Action creators are responsible for making API requests
  - This is where `redux-thunk` comes into play

-Steps 7-8
  - Get fetched data into a component by generating new State in Redux Store
  - Then get that into the component though `mapStateToProps`
