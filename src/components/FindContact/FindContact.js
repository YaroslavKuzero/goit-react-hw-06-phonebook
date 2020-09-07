import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import contactActions from '../../redux/phonebook-actions';

import s from './FindContact.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    <input className={s.find_contact} type='text' placeholder='Find contact by name' value={value} onChange={onChange}></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

const mapStateToProps = ({ filter }) => ({
  value: filter,
})

const mapDispatchToProps = dispatch => ({
  onChange: (event) => dispatch(contactActions.changeFilter(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);