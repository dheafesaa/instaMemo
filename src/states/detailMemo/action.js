import api from '../../utils/api';
import { setLoading } from '../loading/action';

const ActionType = {
  RECEIVE_DETAIL_MEMO: 'RECEIVE_DETAIL_MEMO',
};

function receiveDetailMemo(data) {
  return {
    type: ActionType.RECEIVE_DETAIL_MEMO,
    payload: {
      data,
    },
  };
}

function asyncReceiveDetailMemo(id) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const detailMemoData = await api.getDetailMemo(id);
      dispatch(receiveDetailMemo(detailMemoData));
    } catch (error) {
      alert(error.message);
    } finally {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 1500);
    }
  };
}

export {
  ActionType,
  receiveDetailMemo,
  asyncReceiveDetailMemo,
};
