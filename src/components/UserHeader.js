import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
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
export default UserHeader
