import axios from 'axios';

export async function getMessage() {
  return await axios.get('http://localhost:3000/message');
}
