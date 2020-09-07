import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import contactActions from '../../redux/phonebook-actions';

import s from './ContactList.module.css';

const ContactList = ({ items, onDelete }) => (
  <ul className={s.contact_list}>
    {items.map(item => (<li className={s.contact_list_item} key={item.id}><span className={s.contact_name}>{item.name}: </span><span className={s.contact_number}>{item.number}</span>
      <button className={s.btn_delete} title='delete'
        onClick={() => onDelete(item.id)}
      >x</button>
    </li>))}
  </ul>
);

ContactList.propTypes = {
  items: PropTypes.array.isRequired,
  handler: PropTypes.func.isRequired,
}

const getFilteredContacts = (items, filter) => {

  const normalFilter = filter.toLowerCase();

  return items.filter(item => item.name.toLowerCase().includes(normalFilter));
}

const mapStateToProps = (state) => ({
  items: getFilteredContacts(state.contacts, state.filter)
})

const mapDispatchToProps = dispatch => ({
  onDelete: (id) => dispatch(contactActions.deleteContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);