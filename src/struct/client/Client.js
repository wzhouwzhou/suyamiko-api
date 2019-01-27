'use strict';
Reflect.defineProperty(exports, '__esModule', { value: true });

const Requester = require('../net/Requester').default;

const authstore = new WeakMap;
let _endpoints = null;

const Client = class Client {
  constructor(rootdir, auth = '') {
    if (!_endpoints) _endpoints = rootdir.src.deps.$require.endpoints;
    authstore.set(this, auth);
    this.requester = new Requester(rootdir, auth);
    for (const { name, run } of Object.values(_endpoints)) {
      this[name] = run.bind(this);
    }
  }

  set_token(newtoken) {
    authstore.set(this, newtoken);
  }
  static get _endpoints() {
    return _endpoints;
  }
};

exports.default = Client;
