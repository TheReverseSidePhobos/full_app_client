import * as types from '../actions/types';

export const initialState = {
  isBurger: true,
  isLoggedIn: false,
  modal_show: false,
  info_modal_show: false,
  task__arr: [],
  tasks__new_req: [],
  tasks__In_Prg: [],
  tasks__Done: [],
  taskName: '',
  textTask: '',
  taskPriority: '',
  selectedForInfo: null,
  users: null
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_BURGER:
      return {
        ...state,
        isBurger: !state.isBurger
      };
    case types.TOGGLE_MODAL:
      return {
        ...state,
        modal_show: !state.modal_show
      };
    case types.FETCH_USERS_SUCCEEDED:
      const users = action.payload.data;
      return {
        ...state,
        users
      };
    case types.CLEAN_USERS:
      return {
        ...state,
        users: null
      };
    case types.INFO_TOGGLE_MODAL:
      return {
        ...state,
        info_modal_show: !state.info_modal_show
      };
    case types.SET_PRIORITY:
      return {
        ...state,
        taskPriority: action.payload
      };
    case types.CHANGE_STATUS:
      return {
        ...state,
        task__arr: action.task__arr
      };
    case types.SAVE_ARR:
      return {
        ...state,
        task__arr: action.payload,
        taskName: '',
        textTask: ''
      };
    case types.SAVE_TASK:
      return {
        ...state,
        task__arr: [...state.task__arr, action.payload],
        taskName: '',
        textTask: '',
        taskPriority: ''
      };
    case types.SAVE_OBJ_FOR_INFO:
      return {
        ...state,
        selectedForInfo: action.payload
      };
    case types.ADD_NAME:
      return {
        ...state,
        taskName: action.name
      };
    case types.DELETE_ITEM:
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
