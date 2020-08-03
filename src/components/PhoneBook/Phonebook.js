import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from '../../redux/phonebook-store';
import Form from '../Form';
import Filter from '../FindContact';
import ContactList from '../ContactList';
import styles from './PhoneBook.module.css';



class Phonebook extends Component {
  render() {
    return (
      <div className={styles.phonebook}>
        <h1 className={styles.phonebook_header}>Phonebook</h1>
        <h2 className={styles.section_header}>Create a new contact</h2>
        <Provider store={store.store}>
          <PersistGate loading={null} persistor={store.persistor}>
            <Form />

            <h2 className={styles.section_header}>Contacts</h2>
            <Filter />
            <ContactList />
          </ PersistGate>
        </Provider>
      </div >
    )
  }
}


export default Phonebook;
