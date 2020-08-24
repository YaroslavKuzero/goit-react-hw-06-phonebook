import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import contactActions from '../../redux/phonebook-actions';

const ContactList = ({ renderItems, handler }) => (
  <>
    <ul className={styles.contact_list}>
      {renderItems.map(item => (<li className={styles.contact_list_item} key={item.id}><span className={styles.contact_name}>{item.name}: </span><span className={styles.contact_number}>{item.number}</span>
        <button className={styles.btn_delete} title='delete'
          onClick={() => handler(item.id)}
        >x</button>
      </li>))}
    </ul>
  </>
);

ContactList.propTypes = {
  renderItems: PropTypes.array.isRequired,
  handler: PropTypes.func.isRequired,
}

const getFilteredContacts = (items, filter) => {

  const normalFilter = filter.toLowerCase();

  return items.filter(item => item.name.toLowerCase().includes(normalFilter));
}

const mapStateToProps = (state) => ({
  renderItems: getFilteredContacts(state.contacts, state.filter)
})

const mapDispatchToProps = dispatch => ({
  handler: (id) => dispatch(contactActions.deleteContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);