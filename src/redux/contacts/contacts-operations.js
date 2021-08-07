// import { fetchContacts, addContactReq } from 'services/contacts-api';
import axios from 'axios';
import * as contactsActions from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:2828';

// export async function fetchContacts() {
//   const data = await axios.get('/contacts');
//   return data;
// }

export const getContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

export const addContact = contact => async dispatch => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch(e => dispatch(contactsActions.addContactError(e)));
};

export const deleteContact = contactId => async dispatch => {
  dispatch(contactsActions.deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(contactsActions.deleteContactSuccess(contactId)))
    .catch(e => dispatch(contactsActions.deleteContactError(e)));
};
