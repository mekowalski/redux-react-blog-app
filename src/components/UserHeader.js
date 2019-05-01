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
    return (
      <div>
        This is a Username
      </div>
    )
  }
}

//this component needs access to Redux-level state
//look at state.users and find a specific user
const mapStateToProps = state => {
  return { users: state.users }
}

export default connect(null, { fetchUser })(UserHeader)
