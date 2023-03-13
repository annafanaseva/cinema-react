import * as actions from './actionTypes';

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.CHANGE_FORM:
      return { formType: action.payload.formType };

    default:
      return state;
  }
}
