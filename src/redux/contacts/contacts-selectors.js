export const getAllContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const contacts = getAllContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};
