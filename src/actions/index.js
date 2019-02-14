//Action Creator
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
  }
}

//L8: entire response is dispacthed when only the data tab should be dispatched
//modify dispatch for payload: response.data
