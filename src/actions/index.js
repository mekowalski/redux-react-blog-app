//Action Creator
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
  }
}

// export const fetchUser = id => {
//   return async dispatch => {
//     const response = await jsonPlaceholder.get(`/users/${id}`)
//
//     dispatch({ type: 'FETCH_USER', payload: response.data })
//   }
// }

//refactor to use memoize
//in theory, this should be ablt to call the action creator only 1 time
//this is playing out with memoize, and retuning a function
//not re-running the first function with id, but returning the same function that was returned the first time
//since the function is returned, redux-thunk is going to invoke the function with dispatch and still make
//the network request
export const fetchUser = _.memoize(function(id) {
  return async function(dispatch) {
    const response = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({ type: 'FETCH_USER', payload: response.data })
  }
})
