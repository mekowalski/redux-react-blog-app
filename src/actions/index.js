//Action Creator
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
  }
}

export const fetchUser = id => {
  return async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({ type: 'FETCH_USER', payload: response.data })
  }
}

//outside the action creator
//underscore indicates it's a private function
//(so to speak & other engineers shouldn't attempt to call this function unless thet know what they're doing)
//arrow function makes request and dispatched the action
const _fetchUser = () => {
  const response = await jsonPlaceholder.get(`/users/${id}`)

  dispatch({ type: 'FETCH_USER', payload: response.data })
}
