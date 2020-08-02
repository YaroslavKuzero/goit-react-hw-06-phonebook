import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/phonebook-store';
import Form from '../Form';
import Filter from '../FindContact';
import ContactList from '../ContactList';
import styles from './PhoneBook.module.css';



class Phonebook extends Component {

  // onSubmitHandler = (data) => {
  //   const contactName = data.name.toLowerCase();
  //   if (this.state.contacts.find(contact => contact.name.toLowerCase() === contactName)) {
  //     alert(`${data.name} already in your contact list`)
  //     return;
  //   }
  //   const newContact = {
  //     id: uuidv4(),
  //     name: data.name,
  //     number: data.number
  //   }

  //   this.setState(prevState => ({
  //     contacts: [newContact, ...prevState.contacts],
  //   }))
  // }





  // componentDidMount() {
  //   const contacts = JSON.parse(localStorage.getItem('contactList'))
  //   if (contacts) {
  //     this.setState({ contacts: contacts })
  //   }
  // }

  // componentDidUpdate(prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contactList', JSON.stringify(this.state.contacts))
  //   }
  // }

  render() {
    return (
      <div className={styles.phonebook}>
        <h1 className={styles.phonebook_header}>Phonebook</h1>
        <h2 className={styles.section_header}>Create a new contact</h2>
        <Provider store={store}>
          <Form />

          <h2 className={styles.section_header}>Contacts</h2>
          <Filter />
          <ContactList />
        </Provider>
      </div >
    )
  }
}


export default Phonebook;
