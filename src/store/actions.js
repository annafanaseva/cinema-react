import * as actions from './actionTypes';

export const changeForm = (formType_) => ({
  type: actions.CHANGE_FORM,
  payload: {
    formType: formType_
  }
});
