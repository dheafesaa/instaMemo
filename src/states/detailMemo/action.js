import api from '../../utils/api';

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
    try {
      const detailMemoData = await api.getDetailMemo(id);
      dispatch(receiveDetailMemo(detailMemoData));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveDetailMemo,
  asyncReceiveDetailMemo,
};
