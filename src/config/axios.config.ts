import axios from 'axios-observable';
import { api } from './environment.config';
axios.defaults.baseURL = api;
