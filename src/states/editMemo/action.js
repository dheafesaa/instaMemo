import api from '../../utils/api';
import { setLoading } from '../loading/action';

const ActionType = {
  EDIT_MEMO: 'EDIT_MEMO',
};

function editMemo(data) {
  return {
    type: ActionType.EDIT_MEMO,
    payload: data,
  };
}

function asyncEditMemo(id, updatedMemo) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const updatedMemoData = await api.editMemo(id, updatedMemo);
      dispatch(editMemo(updatedMemoData));
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
  editMemo,
  asyncEditMemo,
};
