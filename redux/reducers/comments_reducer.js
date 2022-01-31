import * as types from '../actions/types';

export const initialState = {
  comments: [],
  userName: '',
  comment: ''
};

const comments_reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_NAME:
      return {
        ...state,
        userName: action.userName
      };
    case types.CHANGE_COMMENT:
      return {
        ...state,
        comment: action.comment
      };
    case types.SEND_COMMENT:
      debugger;
      return {
        ...state,
        comments: [...state.comments, action.payload],
        userName: '',
        comment: ''
      };
    default:
      return state;
  }
};

export default comments_reducer;
