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
- [x] show username at bottom of each post
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

#### Refactor UserHeader Component
- Purpose of the `UserHeader` is to show one single user on the screen
- Currently it's given much more data than it needs, the entire list of users
- Need to somehow only pass it the user it cares about(id, username but not the big array of users)
1. can either get entire user list from within `PostList` and pass in only the user needed to `UserHeader`
2. `mapStateToProps` does some pre-calculations on values that come into the component as props and the Redux state
  - instead of passing in a ton of data to component, and relying on component to find the user needed,
    should extract all that logic to `mapStateToProps` function

- HOW THIS CONTRIBUTES TO REUSABILITY
- In some applications, some engineers define `mapStateToProps` and `connect` functions inside of a separate file
- One file may have `mapStateToProps` and initial connect set up
- A different file will have the component alone
- Advantage of a component used on its own without having to reach into Redux Store-Reducers
- If necessary, can create a version of that component that will reach into Redux Store for data
- `mapStateToProps` and `connect` functions may be reused for other multiple components in app

- [] Refactor `.find` statement from `render()` to `mapStateToProps`
  - In order to access a prop(s) within a component from `mapStateToProps` call a 2nd argument of `ownProps`
  - `ownProps` is reference to props that are about to be sent to the component


#### Current issue
- Currently making a request for a single user 10 times in a row, same for all users
- Making 100 separate requests to fetch just 10 users
- Showing 1 instance of UserHeader for every single blog post fetched
- Whenever UserHeader is rendered on screen, `componentDidMount` is called, calling `fetchUser` with a particular id
- Essentially Action Creator is called 100 different times even though repetitive data is being fetched
- Ideally should only fetch the user 1 time


- [x] Install Lodash Library
  - make use of `memoize` function on one of the Action Creators
  - import lodash, memoize `fetchUser`
1. try memoize of `fetchUser` action creator, outer function
2. try memoize of `fetchUser` action creator, inner function

- [x] One time memoization
  - Define function outside the Action Creator(`fetchUser`)
  - almost works
  - `_fetchUser` needs to get id for fetched user and needs a reference to dispatch()
  - get those 2 arguments in `_fetchUser`


#### Alternate OverFetching Solution
- [] Solve overfetching with new action creator of `fetchPostsAndUsers()`
- This will execute the logic of:
  1. [x] calling `fetchPosts`
  2. [x] get a list of posts (use getState with thunk, giving access to all data in Store)
  3. [x] find all unique userId's from post lists
  4. [x] iterate over unique userIds
  5. [] and call `fetchUser` with each userId
