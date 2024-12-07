import { ActionType } from './action';

const initialState = {
  activeMemos: [],
  archivedMemos: [],
};

const getAllMemoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_ACTIVE_MEMO:
      return {
        ...state,
        activeMemos: [...action.payload],
      };
    case ActionType.RECEIVE_ARCHIVED_MEMO:
      return {
        ...state,
        archivedMemos: [...action.payload],
      };
    default:
      return state;
  }
};

export default getAllMemoReducer;
