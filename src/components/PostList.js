import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

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

//define mapStateToProps
//state will have property of posts and that property will hold all data retruned from Reducer
const mapStateToProps = state => {

}

export default connect(null, { fetchPosts })(PostList)
