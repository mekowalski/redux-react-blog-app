export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload
    default:
      return state
  }
}

//if statements are NOT common syntax
//swtich statement is frequently used instead, inside reducer
//switch is JavaScript specific, not React/Redux specific
//most reducers will have many cases for action.types, currently this app only has one case: FETCH_POSTS
