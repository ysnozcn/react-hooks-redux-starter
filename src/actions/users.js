import { API } from '../api';

export const GET_USERS = 'GET_USERS';

export default function getUsers(params) {
  const data = null;
  return function (dispatch) {
    return API('GET', 'posts', data, params, (result) => {
      dispatch({
        type: GET_USERS,
        payload: result
      })
    });


  };
}