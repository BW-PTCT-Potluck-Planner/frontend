import axios from 'axios-observable';
import { sessionQuery } from '../state/session';

export const axiosWithAuth = () => {
  const { token } = sessionQuery.getValue();

  return axios.create({ headers: { Authorization: token } });
};
