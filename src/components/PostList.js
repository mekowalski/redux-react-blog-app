import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader'

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className='item' key={post.id}>
          <i className='large middle alighend icon user' />
          <div className='content'>
            <div className='description'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>

            <UserHeader userId={post.userId} />
            {
              //pass in prop of userId to show that specific user
              //vale will be post.userId because each post has a userId property
            }
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className='ui relaxed divided list'>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostList)
