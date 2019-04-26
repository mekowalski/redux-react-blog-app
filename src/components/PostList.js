import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    console.log(this.props.posts)
    return (
      <div>
        A Post List
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostList)

//there are technically 2 console logs in browser console
//this is because 1. when app is first loaded, all reducers run 1 initial time,
//which will return a value of state as an empty array
//then, during that initial app run, the render method will be called which invokes console log

//2. immediately after PostList shows on screen, componentDidMount() will be called
//and will go through the process of fetching data
//after data is returned and an action dispatched to reducer,
//the reducer will see the case and return that value of the action's payload property
//Redux will see a new/different object value and return that new payload
//mapStateToProps() will be call a 2nd time which will cal render() again with the 2nd console log
