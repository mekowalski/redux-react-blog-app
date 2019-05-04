//Action Creator
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
  }
}

//pass the 2 arguments in _fetchUser
export const fetchUser = id => {
  return async dispatch => {
    _fetchUser(id, dispatch)
  }
}

//and memoize function will recieve id and dispatch
const _fetchUser = _.memoize((id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`)

  dispatch({ type: 'FETCH_USER', payload: response.data })
})
