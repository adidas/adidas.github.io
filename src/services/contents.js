import { config } from '@/services/config';
import { defaultHeaders } from './config';

export function getContents() {
  return fetch(`${ config.api.host }/content`, {
    headers: { ...defaultHeaders }
  })
  .then((res) => res.json());
}

export function getProjects() {
  return fetch(`${ config.api.host }/content/projects`, {
    headers: { ...defaultHeaders }
  })
  .then((res) => res.json());
}

export function loadTranslation(lang) {
  return fetch(`${ config.api.host }/content/lang/${ lang }`, {
    headers: { ...defaultHeaders }
  })
  .then((res) => res.json());
}
