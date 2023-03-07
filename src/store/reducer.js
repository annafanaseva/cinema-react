import * as actions from './actionTypes';

export default function reducer(state = 'login', action) {
  switch (action.type) {
    case actions.CHANGE_FORM:
      return [
        ...state,
        {
          formType: action.payload.formType
        }
      ];

    default:
      return state;
  }
}
