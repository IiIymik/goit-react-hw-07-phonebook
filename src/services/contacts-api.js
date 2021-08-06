import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:2828';

export async function fetchContacts() {
  const data = await axios.get('/contacts');
  console.log(data);
  return data;
}
