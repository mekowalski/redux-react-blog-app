//Action Creator
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return function(dispatch, getState) {
    const promise = jsonPlaceholder.get('/posts');

    //currently returning an object that is supposed to be an action
    //when using redux-thunk, no need to return an action from inner function
    //only return a function, that's it
    return {
      type: 'FETCH_POSTS',
      payload: promise
    }
  }
}

//can still have normal action creators, NO PROBLEM
//can still make action creators that return action objects
export const selectPost = () = {
  return {
    type: 'SELECT_POST'
  }
}

//L5 can return a function that has some logic inside of it
//how does this help?
//Redux-Thunk will invoke the returned function and passes in dispatch and getState functions as arguments
//dispatch is the same function that passes actions as arg, to reducers(change data)
//getState can be called on Redux Store to return all data/state in Store(read/access data)
