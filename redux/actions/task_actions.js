import * as types from '../actions/types';

export const toggleModalAC = () => {
  return {
    type: types.TOGGLE_MODAL
  };
};
export const save = (obj) => {
  debugger;
  return {
    type: types.SAVE_TASK,
    payload: obj
  };
};

export const saveTask = (name, text, id, taskPriority, date) => {
  return async (dispatch) => {
    if (!taskPriority) {
      taskPriority = 'Lowest';
    }
    let taskObj = {
      id,
      name,
      text,
      status: 'new',
      taskPriority,
      dateTime: date
    };
    dispatch(save(taskObj));
  };
};
export const addName = (name) => {
  return {
    type: types.ADD_NAME,
    name
  };
};
export const addText = (text) => {
  return {
    type: types.ADD_TEXT,
    text
  };
};
export const change = (task__arr) => {
  debugger;
  return {
    type: types.CHANGE_STATUS,
    task__arr
  };
};

export const delete_one = (task__arr) => {
  debugger;
  return {
    type: types.DELETE_ITEM,
    task__arr
  };
};
export const setPriority = (priority) => {
  debugger;
  return {
    type: types.SET_PRIORITY,
    payload: priority
  };
};

export const changeStatus = (id, status, task__arr) => {
  return async (dispatch) => {
    task__arr.map((item) => {
      if (item.id == id) {
        item.status = status;
      }
    });
    dispatch(change(task__arr));
  };
};
export const delete_item = (id, task__arr) => {
  debugger;
  return async (dispatch) => {
    let new_task_arr = [];
    if (task__arr) {
      task__arr.map((item) => {
        if (item.id !== id) {
          new_task_arr.push(item);
        }
      });
      dispatch(delete_one(new_task_arr));
    }
  };
};
