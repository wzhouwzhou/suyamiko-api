const rootdir = require('easypathutil')(__dirname);

const Client = rootdir.src.struct.client.Client.$require_default;

function SuyamikoApiClient(auth) {
  if (!(this instanceof SuyamikoApiClient)) return new SuyamikoApiClient(auth);
  return new Proxy(new Client(rootdir, auth), {
    has: () => true,
    get: (o, p) => {
      if (p in o) return o[p];
      if (typeof p !== 'string') return undefined;
      return Client._endpoints[p].run.bind(o);
    },
  });
}

module.exports = SuyamikoApiClient.SuyamikoApiClient = SuyamikoApiClient.default = SuyamikoApiClient;
