//Action Creator
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
  const response = await jsonPlaceholder.get('/posts');

  //after this transpiles to ES2015, it is not returning a JS object
  return {
    type: 'FETCH_POSTS',
    payload: response
  };
}

//this looks correct
//have an action creator that makes a request and return an action object with data on payload property
//BUT THIS IS NOT CORRECT CODE, THIS IS BAD APPROACH
//Breaking Redux rules, of action creator
