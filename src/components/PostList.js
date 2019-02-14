import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

//3. that object will show up as the PROPs object in the PostList component
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
//2. return that new object with property posts
const mapStateToProps = state => {
  return { posts: state.posts }
}

//take mapStateToProps and hand it in as connect() first argument
//1. every time the reducer is run, mapStateToProps will be called again
export default connect(mapStateToProps, { fetchPosts })(PostList)
