import { ActionType } from './action';

const initialState = {
  successMessage: null,
  errorMessage: null,
};

const deleteMemoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.SET_DELETE_MEMO:
      return {
        ...state,
        successMessage: `Memo with ID ${action.payload.id} deleted successfully.`,
        errorMessage: null,
      };
    default:
      return state;
  }
};

export default deleteMemoReducer;
