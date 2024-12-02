import api from '../../utils/api';

const ActionType = {
  RECEIVE_ACTIVEMEMO: 'RECEIVE_ACTIVEMEMO',
  RECEIVE_ARCHIVEDMEMO: 'RECEIVE_ARCHIVEDMEMO',
};

function receiveAllActiveMemo(activeMemo) {
  return {
    type: ActionType.RECEIVE_ACTIVEMEMO,
    payload: {
      activeMemo,
    },
  };
}

function receiveAllArchivedMemo(archivedMemo) {
  return {
    type: ActionType.RECEIVE_ARCHIVEDMEMO,
    payload: {
      archivedMemo,
    },
  };
}

function asyncReceiveAllActiveMemo() {
  return async (dispatch) => {
    try {
      const activeMemoData = await api.getAllActiveMemo();
      dispatch(receiveAllActiveMemo(activeMemoData));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncReceiveAllArchivedMemo() {
  return async (dispatch) => {
    try {
      const archivedMemoData = await api.getAllArchivedMemo();
      dispatch(receiveAllArchivedMemo(archivedMemoData));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveAllActiveMemo,
  receiveAllArchivedMemo,
  asyncReceiveAllActiveMemo,
  asyncReceiveAllArchivedMemo,
};
