'use strict';
Reflect.defineProperty(exports, '__esModule', { value: true });

exports.default = path => async function () {
  const url = `${this.requester.base_url}/${path}`;
  const result = await this.requester.json(url);
  return `${this.requester.base_url}${result.url}`;
};
