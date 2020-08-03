import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', data => {
  return {
    payload: {
      id: uuidv4(),
      name: data.name,
      number: data.number
    }
  }
})

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/filter')

export default { addContact, deleteContact, changeFilter }