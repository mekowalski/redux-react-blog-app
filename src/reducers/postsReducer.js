export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload
    default:
      return state
  }
}

//return statement should always return a value
//anything other than 'undefined'
//reducer can never ever return 'undefined'
