//Action Creator
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async dispatch => {
    //return =>() for redux-thunk, also getState isn't used therefore not needed
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response })
  }
}

//L5 can return a function that has some logic inside of it
//how does this help?
//Redux-Thunk will invoke the returned function and passes in dispatch and getState functions as arguments
//dispatch is the same function that passes actions as arg, to reducers(change data)
//getState can be called on Redux Store to return all data/state in Store(read/access data)
