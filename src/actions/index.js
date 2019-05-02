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

//second memoize attempt
//memoize the inner function, that gets invoked with redux-thunk
//this is still making 100 requests for 10 users
//everytime this action creator is called, a new function is declared every time
//the function is recreated, memoized and returned
export const fetchUser = function(id) {
  return _.memoize(async function(dispatch) {
    const response = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({ type: 'FETCH_USER', payload: response.data })
  })
}
