import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import taskReducer from '../redux/reducers/task_reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
  task: taskReducer
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
