import { combineReducers } from 'redux';
import postsReducer from './postsReducer'

export default combineReducers({
  posts: postsReducer
})

//separate file for postsReducer
