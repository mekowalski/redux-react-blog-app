//Action Creator
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
  }
}


//first refactor fetchUser action creator back to previous state(pre-memoized state)
export const fetchUser = id => dispatch => {
  _fetchUser(id, dispatch)
}

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`)

  dispatch({ type: 'FETCH_USER', payload: response.data })
})

//reference to memoized version
// export const fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch)
// }
//
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`)
//
//   dispatch({ type: 'FETCH_USER', payload: response.data })
// })
