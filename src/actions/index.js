//Action Creator
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts())

    const userIds = _.uniq(_.map(getState().posts, 'userId'))
    userIds.forEach(id => dispatch(fetchUser(id)))
    //this time await keyword isn't used because i don't care about waiting for each user to be fetched
    //just want to wait for the list of posts to be fetched
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
