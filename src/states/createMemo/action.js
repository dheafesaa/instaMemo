import api from '../../utils/api';

const ActionType = {
  CREATE_MEMO: 'CREATE_MEMO',
};

function createMemo(data) {
  return {
    type: ActionType.CREATE_MEMO,
    payload: {
      data,
    },
  };
}

function asyncCreateMemo({ title, body }) {
  return async (dispatch) => {
    try {
      const createMemoData = await api.createMemo({ title, body });
      dispatch(createMemo(createMemoData));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  createMemo,
  asyncCreateMemo,
};
