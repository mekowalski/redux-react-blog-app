export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload
    default:
      return state
  }
}

//postsReducer handles list of posts therefore default state to an empty array
//reducer will inspect action type, then return the payload
//handle case for not finding appropriate action type, always return state, not undefined from a reducer

//this is NOT a normal reducer, many times a reducer will handle multiple action types with a SWITCH
//statement opposed to an if statement
//switch() is valid JS, not React
