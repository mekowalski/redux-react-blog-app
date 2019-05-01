# Overview of libraries/dependencies

- REDUX: The actual library itself
- REACT-REDUX: Integration layer between React and Redux
- AXIOS: Helps make network requests with external APIs(not technically required, can use fetch and .then)
- REDUX-THUNK: Middleware to help make requests in a Redux app, make request FROM Redux side of app

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

- [x] Steps 7-8
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
- [x] Define a Reducer that will see that dispatch Action and get Data from API payload property
  - Create separate file for each reducer within the reducers DIR
  - Import the separate reducers
  - Wire them up to `combineReducers` call

- [x] Implement `postsReducer`
- `postsReducer` is responsible for maintaining a list of posts from external API
- Inspect the Action type
- Handle case for not finding appropriate action type

- After getting back an Action with payload property, showing up inside Reducer
- Reducer should return the list of posts
- Redux State object should then contain the list of blog posts from the API
- As soon as that happens, the entire React application should be re-rendered
- [x] get list of posts inside the `PostList` component
- (anytime data needs to be retrieved from Redux side, into the React side, always define and use `mapStateToProps()` and pass it down to `connect()`)

- (can't believe i never finished this)

### Redux Middleware
- [x] Wire up Redux-Thunk (it's already installed as a dependency but to make use of it, need to wire up to Redux Store)
- Import root `index.js`
- (oops i already had this step done)

- Focus on Reducers(review)
- Action Creator(fetchPosts) ---> Action(type: 'FETCH_POSTS' payload: response) ---> Store(Reducers(postsReducer))


- LIST BUILDING
- [x] add a bit more logic to `PostList` component
- [x] render list of posts onto the screen `renderList` will have logic to render list of posts
- Currently having issue with `key` being duplicated with some children, not certain what i did wrong to fix this


## USERHEADER COMPONENT
- [] show username at bottom of each post
  - just display author's name
  - make sure this component will call an Action Creator to fetch user to show on the screen
  - display `UserHeader` within `PostList`

- Make sure the data loaded is correct to show user header
- API structure: `/posts` shows 100 different posts which includes body, title, id and userId
- The `userId` only has the numerical value
- Need to figure out how to make an additional API request for `/users` endpoint
  - This includes id, name, username, email, address and a few more user attributes
- Need to request users through different API routes

- FLOW TO REQUEST USER
                        Fetch Posts
                             |
                  Show posts in PostList
          Each element in PostList shows UserHeader
           UserHeader is given ID of user to show
         Each UserHeader attempts to fetch its user
            Fetch User   Fetch User  Fetch User
                |             |           |
                Show user in each UserHeader

1. Application begins with fetching list of posts
2. Eventually show list of posts to user inside `PostList` component
3. Inside `renderList()` create separate instance of `UserHeader` component for every individual post
4. Inside `UserHeader` add a new call to Action Creator to attempt fetching just the individual user
  - A bunch of separate requests for each user
5. Make 10 separate requests(in theory from API allowances)
  - get each user
  - return it to application
  - somehow process through a Reducer
  - somehow get each relevant user into each instance of `UserHeader` component

- [x] Action Creator: `fetchUser`, single
- [x] Action: type: `FETCH_USER` payload: `response.data`
- [x] Store-Reducers: `usersReducer` to hold all users fetched
