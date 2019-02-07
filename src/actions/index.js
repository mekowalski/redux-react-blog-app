//Action Creator
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  const promise = jsonPlaceholder.get('/posts');

  return {
    type: 'FETCH_POSTS',
    payload: promise
  };
}

//this looks correct
//have an action creator that makes a request and return an action object with data on payload property
//BUT THIS IS NOT CORRECT CODE, THIS IS BAD APPROACH
//Breaking Redux rules, of action creator
//ACTIONS MUST BE PLAIN OBJECTS

//promise version is also not great
