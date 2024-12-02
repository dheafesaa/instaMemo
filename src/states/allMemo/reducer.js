import { ActionType } from './action';

const initialState = {
  activeMemos: [],
  archivedMemos: [],
};

const getAllMemoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_ACTIVEMEMO:
      return {
        ...state,
        activeMemos: action.payload.activeMemo,
      };
    case ActionType.RECEIVE_ARCHIVEDMEMO:
      return {
        ...state,
        archivedMemos: action.payload.archivedMemo,
      };
    default:
      return state;
  }
};

export default getAllMemoReducer;
