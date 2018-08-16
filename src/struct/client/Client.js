'use strict';
Reflect.defineProperty(exports, '__esModule', { value: true });

const Requester = require('../net/Requester').default;

const authstore = new WeakMap;

const Client = class Client {
  constructor(rootdir, auth) {
    authstore.set(this, auth);
    this.requester = new Requester(rootdir, auth);
    for (const { name, run } of Object.values(rootdir.src.deps.$require.endpoints)) {
      this[name] = run.bind(this);
    }
  }

  set_token(newtoken) {
    authstore.set(this, newtoken);
  }
};

exports.default = Client;
