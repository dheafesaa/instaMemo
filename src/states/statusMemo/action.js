import api from '../../utils/api';

const ActionType = {
  ARCHIVE_MEMO: 'ARCHIVE_MEMO',
  UNARCHIVE_MEMO: 'UNARCHIVE_MEMO',
};

function archiveMemoAction(data) {
  return {
    type: ActionType.ARCHIVE_MEMO,
    payload: data,
  };
}

function unarchiveMemoAction(data) {
  return {
    type: ActionType.UNARCHIVE_MEMO,
    payload: data,
  };
}

function asyncArchiveMemo(id) {
  return async (dispatch) => {
    try {
      const archivedMemo = await api.archiveMemo(id);
      dispatch(archiveMemoAction(archivedMemo));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUnarchiveMemo(id) {
  return async (dispatch) => {
    try {
      const unarchivedMemo = await api.unarchiveMemo(id);
      dispatch(unarchiveMemoAction(unarchivedMemo));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  archiveMemoAction,
  unarchiveMemoAction,
  asyncArchiveMemo,
  asyncUnarchiveMemo,
};
