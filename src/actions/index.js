//Action Creator
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = sync () => {
  const response = await jsonPlaceholder.get('/posts')

  return {
    type: 'FETCH_POSTS',
    payload: response
  }
}
