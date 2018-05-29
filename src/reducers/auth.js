import * as types from "../actions/types";
import produce from "immer";

const initialState = {
  isLoading: false,
  hasError: false,
  errorMessage: null,
  hasSuccess: false,
  successMessage: null,
  name: {}
};

const auth = (state = initialState, action) =>
  produce(state, draft => {

    switch (action.type) {
        case types.LOGIN_TEST_SUCCESS:
        draft.hasSuccess = true;
        draft.name = action.payload;
        break;
      default:      
        break;
    }
  });

export default auth;
