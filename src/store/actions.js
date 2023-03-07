import * as actions from './actionTypes';

export const changeForm = (formType) => ({
  type: actions.CHANGE_FORM,
  payload: formType
});
