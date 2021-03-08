import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { useSelector, useDispatch } from 'react-redux';

import getUsers from '../../actions/users';

export const Dashboard = (props) => {

  const userDispatch = useDispatch();

  useEffect(() => {
    userDispatch(getUsers({}));
  }, [userDispatch]);


  return (
    <div>
      {  
        (props.users.length > 0) ? props.users.map((user, index) => (
          <div>{user.title}</div>
        )) : "loading"
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  users: state.users.list || []
})

const mapDispatchToProps = {
  getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
