import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactAction from '../../redux/phonebook-actions';
import styles from './Form.module.css';

const initialState = {
  name: '',
  number: ''
}


class Form extends Component {

  state = {
    name: '',
    number: ''
  }

  addContactHandler = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state)
    this.resetInputs()
  };

  changeHandler = event => {
    const { name, value } = event.currentTarget
    this.setState({ [name]: value });
  }

  resetInputs = () => {
    this.setState(initialState)
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.addContactHandler}>
        <label>
          <input className={styles.input_name} name='name' type='text' placeholder='Name' value={this.state.name} onChange={this.changeHandler}></input>
        </label>
        <label>
          <input className={styles.input_num} name='number' type='tel' placeholder='Number' value={this.state.number} onChange={this.changeHandler}></input>
        </label>
        <button className={styles.btn_add} type='submit'>Add contact</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: data => dispatch(contactAction.addContact(data)),
})

export default connect(null, mapDispatchToProps)(Form);
