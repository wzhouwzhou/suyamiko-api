'use strict';
Reflect.defineProperty(exports, '__esModule', { value: true });

const https = require('https');
const qs = require('querystring');

const option_store = new WeakMap;

const Requester = class Requester {
  constructor(rootdir, auth) {
    const { NetConstants } = rootdir.src.deps.$require;
    option_store.set(this, Object.assign({}, NetConstants.default_options));
    this.set_auth(auth);
    this.base_url = NetConstants.base_url;
  }

  set_auth(auth) {
    option_store.get(this).headers.Authorization = auth;
    return this;
  }

  get query() {
    return qs.stringify;
  }

  buffer(path, headers = {}) {
    const options = Object.assign({}, option_store.get(this));
    options.path = path;
    options.headers = Object.assign({}, options.headers, headers);
    return new Promise((res, rej) => {
      const req = this.lastrequest = https.get(options, response => {
        const { statusCode } = response;
        let error = null;
        if (statusCode !== 200) {
          error = { details: new Error(`Status Code: ${statusCode}`), code: statusCode };
          response.resume();
        }
        let chunks = [];
        response.on('data', chunk => chunks.push(chunk));
        return response.on('end', () => {
          const buf = Buffer.concat(chunks);
          let message = buf.toString('utf-8');
          if (process.env.SUYAMIKOAPI_DEBUG) console.log(message); // eslint-disable-line no-console
          try {
            message = JSON.parse(message);
          } finally {
            if (error) {
              return rej({
                error: error.details,
                code: error.code,
                message,
              });
            }
            return res(buf);
          }
        });
      });
      return req.end();
    });
  }
  text(path, headers = {}) {
    return this.buffer(path, headers).then(r => r.toString());
  }
  async json(path, headers = {}) {
    return JSON.parse(await this.text(path, headers));
  }
};
Requester.Requester = Requester.default = Requester;
exports.default = Requester;
