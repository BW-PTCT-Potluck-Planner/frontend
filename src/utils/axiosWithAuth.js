import axios from 'axios';
import { sessionQuery } from '../state/session';

export const axiosWithAuth = () => {
  const { token } = sessionQuery.getValue();

  return axios.create({
    headers: {
      Authorization: token,
    },
  });
};
