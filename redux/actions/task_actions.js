import * as types from '../actions/types';

export const toggleModalAC = () => {
  return {
    type: types.TOGGLE_MODAL
  };
};
export const infoToggleModalAC = () => {
  return {
    type: types.INFO_TOGGLE_MODAL
  };
};
export const save = (obj) => {
  debugger;
  return {
    type: types.SAVE_TASK,
    payload: obj
  };
};
export const saveObjForInfo = (obj) => {
  debugger;
  return {
    type: types.SAVE_OBJ_FOR_INFO,
    payload: obj
  };
};

export const loadDataForInfo = (id, task__arr) => {
  debugger;
  return async (dispatch) => {
    let selectedObj = task__arr.find(item => item.id == id)
    debugger
    dispatch(saveObjForInfo(selectedObj));
  };
};
export const saveTask = (name, text, id, taskPriority, date, complitedDate) => {
  debugger;
  return async (dispatch) => {
    if (!taskPriority) {
      taskPriority = 'lowest';
    }
    let taskObj = {
      id,
      name,
      text,
      status: 'new',
      taskPriority,
      dateTime: date,
      compliteDate: complitedDate
    };
    dispatch(save(taskObj));
  };
};
export const changePriority = (priority, item, task__arr) => {
  return async (dispatch) => {
    task__arr.map((i) => {
      if (i.id == item.id) {
        i.taskPriority = priority;
      }
    });
    dispatch(change(task__arr));
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
