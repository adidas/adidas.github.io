import { config, defaultHeaders } from '@/services/config';
import { load } from 'js-yaml';
import { Observable } from 'rxjs';
import { fetch } from '../utils/rxjs';

export function getGitHubRepositories() {
  return new Promise((resolve, reject) => {
    let values = [];

    const obs$ = getReposPage()
      .expand(({ data: { entity: { repositories: { pageInfo: { hasNextPage, endCursor } } } } }) => {
        if (hasNextPage) {
          return getReposPage(endCursor);
        }

        return Observable.of({});
      })
      .catch((err) => {
        obs$.unsubscribe();
        reject(err);
      })
      .subscribe(({ data }) => {
        if (data) {
          values = values.concat(data.entity.repositories.edges.map(({ node }) => ({
            ...node,
            config: load(node.config ? node.config.text : null)
          }))
          .filter(({ config }) => config))
          .map((info) => {
            if (!info.config.imageUrl) {
              info.config.imageUrl = '/img/source.jpg';
            }

            return info;
          });
        } else {
          obs$.unsubscribe();
          resolve(values);
        }
      });
  });
}

function getReposPage(cursor) {
  return fetch(`${ config.api.host }/repositories${ cursor ? `?after=${ cursor }` : '' }`, {
    headers: { ...defaultHeaders },
    responseType: 'json'
  })
  .map(({ data }) => {
    if (data.errors) {
      throw data;
    }

    return data;
  });
}
