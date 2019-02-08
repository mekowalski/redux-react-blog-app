//Action Creator
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return function() {
    const promise = jsonPlaceholder.get('/posts');

    return {
      type: 'FETCH_POSTS',
      payload: promise
    }
  }
}

//L5 can return a function that has some logic inside of it
//how does this help?
//
