import * as contactsActions from './contacts-actions';
import { fetchContacts } from 'services/contacts-api';

export const getContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const { data } = await fetchContacts();
    console.log(data);
    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};
