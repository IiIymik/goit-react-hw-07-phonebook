import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../Form/Form';
import { Container, TitleMain, TitleBook, } from './App.styled.js'
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import * as actions from 'redux/contacts/contacts-actions';
import { getContacts, addContact} from 'redux/contacts/contacts-operations';
import { getFilter, getVisibleContacts } from 'redux/contacts/contacts-selectors';


export default function App() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch])

  return (
    <Container>
      <TitleMain>Phonebook</TitleMain>
      {/* <Form onSubmit={(obj)=> addContact(obj)} data={contacts} /> */}
      {/* <TitleBook>Contacts</TitleBook> */}
      {/* <Filter onChange={(e) => dispatch(actions.changeFilterValue(e.currentTarget.value))} value={filter} /> */}
      <ContactsList />
    </Container>
  )
}

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
//   filter: state.contacts.filter,
// })

// const mapDispatchToProps = dispatch => ({
//   addContact: (obj) => dispatch(actions.addContact(obj)),
//   deleteContact: (contactId) => dispatch(actions.deleteContact(contactId)),
//   addFilterValue: (value) => dispatch(actions.addFilterValue(value)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App);







