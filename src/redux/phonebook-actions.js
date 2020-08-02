import actionTypes from './phonebook-actionTypes';
import { v4 as uuidv4 } from 'uuid';

const addContact = (data) => ({
  type: actionTypes.ADD,
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number
  }
})

const deleteContact = (contactId) => ({
  type: actionTypes.DELETE,
  payload: contactId
})

const changeFilter = (value) => ({
  type: actionTypes.FILTERED,
  payload: value,
})

export default { addContact, deleteContact, changeFilter }