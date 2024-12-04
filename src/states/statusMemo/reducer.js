import { ActionType } from './action';

const initialState = {
  detailMemo: null,
  memoList: [],
};

const statusMemoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.ARCHIVE_MEMO:
    case ActionType.UNARCHIVE_MEMO:
      return {
        ...state,
        detailMemo: action.payload,
        memoList: state.memoList.map((memo) => (memo.id === action.payload.id ? action.payload : memo)),
      };

    default:
      return state;
  }
};

export default statusMemoReducer;
