import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import * as types from '../redux/actions/types';

const About = () => {
  const { users } = useSelector((state) => state.task);

  const dispatch = useDispatch();
  const handleGetUsersBtn = () => {
    dispatch({ type: types.FETCH_USERS });
  };
  const handleCleanList = () => {
    dispatch({ type: types.CLEAN_USERS });
  };
  return (
    <Layout>
      <div className="container">
        <h1 className="container">About Page</h1>
        <button onClick={handleGetUsersBtn} className="getUsersBtn">
          Get Users
        </button>
        <button
          disabled={!!!users}
          onClick={handleCleanList}
          className="getUsersBtn btn2"
        >
          Clean list
        </button>
        {users && users.map((user) => <div>{user.name}</div>)}
      </div>
    </Layout>
  );
};

export default About;
