import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import taskReducer from '../redux/reducers/task_reducer';
import comments_reducer from '../redux/reducers/comments_reducer';
import auth_reducer from '../redux/reducers/auth_reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

let reducers = combineReducers({
  task: taskReducer,
  comment: comments_reducer,
  auth: auth_reducer
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(rootSaga)

export default store;
