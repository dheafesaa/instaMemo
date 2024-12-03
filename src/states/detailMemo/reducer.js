import { ActionType } from './action';

const initialState = {
  detailMemo: null,
};

const detailMemoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_MEMO:
      return {
        ...state,
        detailMemo: action.payload.data,
      };
    default:
      return state;
  }
};

export default detailMemoReducer;
