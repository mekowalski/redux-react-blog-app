export default (state = [], action) => {
  if (action.type === 'FETCH_POSTS') {
    return action.payload
  }
}

//postsReducer handles list of posts therefore default state to an empty array
//reducer will inspect action type, then return the payload
