import { createStore } from 'redux';
import reducer from './reducer';
import * as actions from './actionTypes';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(1, store.getState());

store.dispatch({
  type: actions.CHANGE_FORM,
  payload: { formType: 'login' }
});

console.log(2, store.getState());

export default store;
