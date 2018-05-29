import * as types from "./types";

export const login = string => {
    return dispatch => {
      dispatch({
        type: types.LOGIN_TEST_SUCCESS,
        payload: string
      });
    };
  };

export const clearState = () => {
  return dispatch => {
    dispatch({
      type: types.LOGIN_CLEAR_SUCCESS,
    });
  };
}
  