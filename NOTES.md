# Overview of libraries/dependencies

- REDUX: The actual library itself
- REACT-REDUX: Integration layer between React and Redux
- AXIOS: Helps make network requests with external APIs(not technically required, can use fetch and .then)
- REDUX-THUNK: Middleware to help make requests in a Redux application

## COMPONENTS BUILD
- [x] Build PostList and attach it to App
- [] Build UserHeader component

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

- [x] Steps 4-6
  - Action creators are responsible for making API requests
  - This is where `redux-thunk` comes into play
  - Common for action creator to initiate the data fetching process

- Steps 7-8
  - Get fetched data into a component by generating new State in Redux Store
  - Then get that into the component though `mapStateToProps`
  - `mapStateToProps` is always responsible for getting data from Store and down to the component

- [x] Wire up the `connect()` to PostList
- [x] build `componentDidMount` method
- [x] Set up Axios
- [x] Action Creator to call the external API and get data
- (this did not work well)
------------------------------
- [x] Wire up request to external API inside action creator
- [x] Set up Middleware redux-thunk(wire up to Redux Store)
- [x] Refactor `fetchPosts()` to truly make use of redux-thunk
------------------------------
- [] Define a Reducer that will see that dispatch Action and get Data from API payload property
  - Create separate file for each reducer within the reducers DIR
  - Import the separate reducers
  - Wire them up to `combineReducers` call
