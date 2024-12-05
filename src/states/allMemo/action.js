import api from '../../utils/api';

const ActionType = {
  RECEIVE_ACTIVE_MEMO: 'RECEIVE_ACTIVE_MEMO',
  RECEIVE_ARCHIVED_MEMO: 'RECEIVE_ARCHIVED_MEMO',
};

const receiveActiveMemo = (activeMemos) => ({
  type: ActionType.RECEIVE_ACTIVE_MEMO,
  payload: activeMemos,
});

const receiveArchivedMemo = (archivedMemos) => ({
  type: ActionType.RECEIVE_ARCHIVED_MEMO,
  payload: archivedMemos,
});

const asyncReceiveAllActiveMemo = () => async (dispatch) => {
  try {
    const activeMemos = await api.getAllActiveMemo();
    dispatch(receiveActiveMemo(activeMemos));
  } catch (error) {
    alert(error.message);
  }
};

const asyncReceiveAllArchivedMemo = () => async (dispatch) => {
  try {
    const archivedMemos = await api.getAllArchivedMemo();
    dispatch(receiveArchivedMemo(archivedMemos));
  } catch (error) {
    alert(error.message);
  }
};

export {
  ActionType,
  receiveActiveMemo,
  receiveArchivedMemo,
  asyncReceiveAllActiveMemo,
  asyncReceiveAllArchivedMemo,
};
