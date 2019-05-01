import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  render() {
    return (
      <div>
        This is a Username
      </div>
    )
  }
}

//this component needs access to Redux-level state
//look at state.user and find a specific user
const mapStateToProps = state => {
  return { users: state.users }
}

export default connect(null, { fetchUser })(UserHeader)
