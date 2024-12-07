import api from '../../utils/api';
import { setLoading } from '../loading/action';

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
  dispatch(setLoading(true));
  try {
    const activeMemos = await api.getAllActiveMemo();
    dispatch(receiveActiveMemo(activeMemos));
  } catch (error) {
    alert(error.message);
  } finally {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1500);
  }
};

const asyncReceiveAllArchivedMemo = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const archivedMemos = await api.getAllArchivedMemo();
    dispatch(receiveArchivedMemo(archivedMemos));
  } catch (error) {
    alert(error.message);
  } finally {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1500);
  }
};

export {
  ActionType,
  receiveActiveMemo,
  receiveArchivedMemo,
  asyncReceiveAllActiveMemo,
  asyncReceiveAllArchivedMemo,
};
