import * as types from '../actions/types';

const initialState = {
  modal_show: false,
  task__arr: [],
  taskName: '',
  textTask: '',
  taskPriority: ''
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_MODAL:
      return {
        ...state,
        modal_show: !state.modal_show
      };
    case types.SET_PRIORITY:
      return {
        ...state,
        taskPriority: action.payload
      };
    case types.CHANGE_STATUS:
      debugger;
      return {
        ...state,
        task__arr: action.task__arr
      };
    case types.SAVE_TASK:
      debugger;
      return {
        ...state,
        task__arr: [...state.task__arr, action.payload],
        taskName: '',
        textTask: '',
        taskPriority: ''
      };
    case types.ADD_NAME:
      return {
        ...state,
        taskName: action.name
      };
    case types.DELETE_ITEM:
      debugger;
      return {
        ...state,
        task__arr: action.task__arr
      };
    case types.ADD_TEXT:
      return {
        ...state,
        textTask: action.text
      };

    default:
      return state;
  }
};

export default taskReducer;
