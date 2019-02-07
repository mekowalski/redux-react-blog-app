import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

//class-based to have access to lifecycle methods
//componentDidMount will have an action creator
class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div>
        A Post List
      </div>
    )
  }
}

//pass in a 1st argument of mapStateToProps
//right now it isn't present(yet) therefore pass in null
export default connect(null, { fetchPosts })(PostList)
