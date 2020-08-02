import { combineReducers } from 'redux';
import actionTypes from './phonebook-actionTypes';


const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [payload, ...state];

    case actionTypes.DELETE:
      return state.filter(item => item.id !== payload)

    default:
      return state;
  }

}

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.FILTERED:
      return payload;

    default:
      return state;
  }
}

export default combineReducers({ contacts, filter });