import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContact = createAction('contacts/Save');
// export const addContact = obj => ({
//   type: 'contacts/Save',
//   payload: obj,
// });

export const deleteContact = createAction('contacts/Delete');
// export const deleteContact = contactId => ({
//   type: 'contacts/Delete',
//   payload: contactId,
// });
export const addFilterValue = createAction('contacts/Filter');
// export const addFilterValue = value => ({
//   type: 'contacts/Filter',
//   payload: value,
// });
