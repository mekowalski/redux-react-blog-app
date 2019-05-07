//Action Creator
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => {
  return async dispatch => {
    console.log('about to fetch posts!!!')
    await dispatch(fetchPosts())
    console.log('fetched posts!!!')
  }
}

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
