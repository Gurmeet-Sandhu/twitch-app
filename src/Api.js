import axios from 'axios';


const api = axios.create({
  headers: {
    Authorization : process.env.REACT_APP_ACCESS_TOKEN,
    'Client-ID': process.env.REACT_APP_CLIENT_ID
  }
});

export default api