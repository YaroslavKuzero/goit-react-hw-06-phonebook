import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';

const contacts = createReducer([], {
  [actions.addContact]: (state, { payload }) => [payload, ...state],
  [actions.deleteContact]: (state, { payload }) => state.filter(item => item.id !== payload,)
})

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
})

export default combineReducers({ contacts, filter });