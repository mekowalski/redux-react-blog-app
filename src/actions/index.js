//Action Creator
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
  }
}

//if returning a function, dispatch an action, instead call dispatch() manually with Action to dispatch
//call dispatch() and pass in Action object(L8), can add payload property that has all the data from request
//with redux-thunk, async await CAN be used with no problems
