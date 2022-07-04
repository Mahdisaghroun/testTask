import * as actionTypes from './actionTypes';

export const getUsersRequest = () => {
  return {
    type: actionTypes.GET_USERS_REQUEST,
  
  };
};
export const getUsersRSuccess = users => {
  return {
    type: actionTypes.GET_USERS_SUCCESS,
    users,
  };
};
export const getUserFail = error => {
  return {
    type: actionTypes.ERROR,
    error,
  };
};
export const addUser = user => {
  return {
    type: actionTypes.ADD_USER,
    user,
  };
};
