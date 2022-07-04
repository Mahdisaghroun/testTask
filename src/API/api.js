const baseUrl = 'https://dummyjson.com';
import axios from 'axios';
export const Api = {
  getUsers: () => {
    return axios.get(`${baseUrl}/users`);
  },
};
