import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://football-stats-16eea.firebaseio.com/'
});

export default instance;