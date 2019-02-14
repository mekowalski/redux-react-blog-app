import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

//3. that object will show up as the PROPs object in the PostList component
class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    console.log(this.props.posts)
    {
      //returned 2 console logs
      //when app is first loaded, all reducers run 1 inital time
      //the action in the reducer won't be matched therefore the state will be returned with default of []
      //react side of app will render 1 inital time
      //during inital 1 time, the render method will call & invoke console log which is the first [] array
    }
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
