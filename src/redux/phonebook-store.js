import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './phonebook-reducers';

const rootReducer = contactReducer;

const store = createStore(rootReducer, composeWithDevTools());

export default store;