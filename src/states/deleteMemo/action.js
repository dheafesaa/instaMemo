import api from '../../utils/api';

const ActionType = {
  SET_DELETE_MEMO: 'SET_DELETE_MEMO',
};

function setDeleteMemo(id) {
  return {
    type: ActionType.SET_DELETE_MEMO,
    payload: { id },
  };
}

function asyncSetDeleteMemo(id) {
  return async (dispatch) => {
    try {
      const deleteMemoData = await api.deleteMemo(id);
      dispatch(setDeleteMemo(deleteMemoData));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  setDeleteMemo,
  asyncSetDeleteMemo,
};
