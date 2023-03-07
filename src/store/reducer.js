import * as actions from './actionTypes';

export default function reducer(state = 'login', action) {
  switch (action.type) {
    case actions.CHANGE_FORM:
      return [...state, action.payload];

    default:
      return state;
  }
}
