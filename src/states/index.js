import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import usersReducer from './users/reducer';
import getAllMemoReducer from './allMemo/reducer';

const store = configureStore({
  reducer: {
    loadingBar: loadingBarReducer,
    authUser: authUserReducer,
    users: usersReducer,
    getAllMemo: getAllMemoReducer,
  },
});

export default store;
