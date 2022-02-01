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
      return {
        ...state,
        comments: action.payload
      };
    case types.SAVE_COM_ARR:
      return {
        ...state,
        comments: action.payload,
        userName: '',
        comment: ''
      };
    case types.SEND_COM_CLEAR:
      return {
        ...state,
        userName: '',
        comment: ''
      };
    default:
      return state;
  }
};

export default comments_reducer;
