import * as actionTypes from '../actions/actionTypes';

const initialState = {
  users: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,

        users: action.users,
      };
    case actionTypes.ERROR:
      return {
        ...state,

        error: action.error,
      };
    case actionTypes.ADD_USER:
      return {
        ...state,

        users: [...state.users, action.user],
      };

    default:
      return state;
  }
}

export default reducer;
