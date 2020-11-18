'use strict';
Reflect.defineProperty(exports, '__esModule', { value: true });

/* eslint-disable no-invalid-this */

exports.default = path => async function(options = {}, headers = {}) { // eslint-disable-line func-names
  const { raw, ...o } = options;
  const url = `${this.requester.base_url}/${path}?${this.requester.query(o)}`;
  let method = 'json';
  if (raw) method = 'buffer';
  const result = await this.requester[method](url, headers);
  if (raw) return result;
  return `${this.requester.base_url}${result.url}`;
};
