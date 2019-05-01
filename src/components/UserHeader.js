import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  render() {
    //component will have access to prop of this.props.users, array of all the users
    //.find is a built-in method for JS arrays
    //this will find just the user i care about
    const user = this.props.users.find((user) => user.id === this.props.userId)

    //when app is first rendered, there won't be an array of users
    //therefore the user needed won't be available
    if (!user) {
      return null
    }

    //if user is present and accessible
    return (
      <div className='header'>
        {user.name}
      </div>
    )
  }
}

//this component needs access to Redux-level state
//look at state.users and find a specific user
const mapStateToProps = state => {
  return { users: state.users }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader)
