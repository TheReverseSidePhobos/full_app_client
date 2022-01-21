import * as types from '../actions/types';


const initialState = {
  modal_show: false
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_MODAL:
      debugger
      return{
        ...state,
        modal_show: !state.modal_show
      }
  
    default:
      return state;
  }
}

export default taskReducer;