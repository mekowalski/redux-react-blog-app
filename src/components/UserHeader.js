import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  //whenever this component appears on screen, make sure to give the atempted-fetched user, to show
  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  render() {
    return (
      <div>
        This is a Username
        {
          //make sure to call action creator to fetch appropriate user
        }
      </div>
    )
  }
}

export default connect(null, { fetchUser })(UserHeader)
