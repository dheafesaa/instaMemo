import { ActionType } from './action';

const initialState = {
  detailMemo: null,
  memoList: [],
};

const editMemoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.EDIT_MEMO:
      return {
        ...state,
        detailMemo:
          state.detailMemo?.id === action.payload.id
            ? action.payload
            : state.detailMemo,
        memoList: state.memoList.map((memo) => (memo.id === action.payload.id ? action.payload : memo)),
      };

    default:
      return state;
  }
};

export default editMemoReducer;
