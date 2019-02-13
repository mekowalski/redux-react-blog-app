export default (state = [], action) => {
  if (action.type === 'FETCH_POSTS') {
    return action.payload
  }
  return state
}

//postsReducer handles list of posts therefore default state to an empty array
//reducer will inspect action type, then return the payload
//handle case for not finding appropriate action type, always return state, not undefined from a reducer
