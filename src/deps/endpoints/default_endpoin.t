'use strict';
Reflect.defineProperty(exports, '__esModule', { value: true });

exports.default = path => async function (options = {}) {
  const url = `${this.requester.base_url}/${path}?${this.requester.query(options)}`;
  const result = await this.requester.json(url);
  return `${this.requester.base_url}${result.url}`;
};
