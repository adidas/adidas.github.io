import axios from 'axios';
import { config } from '@/services/config';
import { defaultHeaders } from './config';

export function getContents() {
  return axios.get(`${ config.api.host }/content`, {
    headers: { ...defaultHeaders },
    responseType: 'json'
  })
  .then(({ data }) => data);
}

export function getProjects() {
  return axios.get(`${ config.api.host }/content/projects`, {
    headers: { ...defaultHeaders },
    responseType: 'json'
  })
  .then(({ data }) => data);
}

export function loadTranslation(lang) {
  return axios.get(`${ config.api.host }/content/lang/${ lang }`, {
    headers: { ...defaultHeaders },
    responseType: 'json'
  })
  .then(({ data }) => data);
}
