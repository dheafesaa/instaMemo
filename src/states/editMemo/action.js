import api from '../../utils/api';

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
    try {
      const updatedMemoData = await api.editMemo(id, updatedMemo);
      dispatch(editMemo(updatedMemoData));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  editMemo,
  asyncEditMemo,
};
