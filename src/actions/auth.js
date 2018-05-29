import * as types from "./types";

export const login = string => {
    return dispatch => {
      dispatch({
        type: types.LOGIN_TEST_SUCCESS,
        payload: string
      });
    };
  };
  