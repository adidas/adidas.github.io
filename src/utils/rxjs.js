import axios from 'axios';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/expand';
import 'rxjs/add/operator/catch';

/**
 * Perform a fetch request as Observable.
 *
 * @param {string} url - url of resource to fetch.
 * @param {Request} options - fetch options.
 * @returns {Observable} observable that emits fetch response.
 */
export function fetch(url, options) {
  return Observable.create((observer) => {
    axios(url, options)
    .then((res) => {
      observer.next(res);
      observer.complete();
    })
    .catch((err) => {
      observer.error(err);
    });
  });
}

/**
 * Retrieve the body from a fetch response as JSON.
 *
 * @param {object} res - fetch response.
 * @returns {Observable} observable that emits response body as JSON.
 */
export function asJson(res) {
  return Observable.fromPromise(res.json());
}
