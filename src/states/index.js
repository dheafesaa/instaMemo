import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import usersReducer from './users/reducer';
import getAllMemoReducer from './allMemo/reducer';
import createMemoReducer from './createMemo/reducer';
import detailMemoReducer from './detailMemo/reducer';
import deleteMemoReducer from './deleteMemo/reducer';
import editMemoReducer from './editMemo/reducer';
import statusMemoReducer from './statusMemo/reducer';

const store = configureStore({
  reducer: {
    loadingBar: loadingBarReducer,
    authUser: authUserReducer,
    users: usersReducer,
    getAllMemo: getAllMemoReducer,
    createMemo: createMemoReducer,
    detailMemo: detailMemoReducer,
    deleteMemo: deleteMemoReducer,
    editMemo: editMemoReducer,
    statusMemo: statusMemoReducer,
  },
});

export default store;
