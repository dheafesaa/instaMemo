import { ActionType } from './action';

const initialState = {
  activeMemo: null,
};

const createMemoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.CREATE_MEMO:
      return {
        ...state,
        activeMemo: action.payload.data,
      };
    default:
      return state;
  }
};

export default createMemoReducer;
