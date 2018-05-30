import * as types from "../actions/types";
import produce from "immer";

const initialState = {
  isLoading: false,
  hasError: false,
  errorMessage: null,
  hasSuccess: false,
  successMessage: null,
  user: {}
};

const auth = (state = initialState, action) =>
  produce(state, draft => {

    switch (action.type) {
        case types.LOGIN_TEST_SUCCESS:
          draft.hasSuccess = true;
          draft.user = action.payload;
        break;
        case types.LOGIN_CLEAR_SUCCESS:
          draft.hasSuccess = true;
          draft.user = {}
        break;
      default:      
        break;
    }
  });

export default auth;
