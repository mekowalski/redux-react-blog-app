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

- [x] Steps 1-3
  - Components are generally responsible for fetching data they need by calling an action creator
  - Common place to initiate data fetch is in a `componentDidMount` lifecycle

- Steps 4-6
  - Action creators are responsible for making API requests
  - This is where `redux-thunk` comes into play
  - Common for action creator to initiate the data fetching process

- Steps 7-8
  - Get fetched data into a component by generating new State in Redux Store
  - Then get that into the component though `mapStateToProps`
  - `mapStateToProps` is always responsible for getting data from Store and down to the component

- [x] Wire up the `connect()` to PostList
- [] build `componentDidMount` method
- [] Action Creator to call the external API and get data
- [] Wire up request to external API inside action creator
