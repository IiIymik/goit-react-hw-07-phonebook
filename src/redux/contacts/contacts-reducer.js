import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  addFilterValue,
  fetchContactsSuccess,
  fetchContactsRequest,
  fetchContactsError,
} from './contacts-actions';

const entities = createReducer([], {
  [fetchContactsSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, action) => action.payload,
  [fetchContactsRequest]: () => null,
});
// const items = createReducer([], {
//   [addContact]: (state, action) => [...state, action.payload],
//   [deleteContact]: (state, action) =>
//     state.filter(item => item.id !== action.payload),
// });
const filter = createReducer('', {
  [addFilterValue]: (_, action) => action.payload,
});
export default combineReducers({
  entities,
  filter,
  isLoading,
  error,
});
