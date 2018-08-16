const rootdir = require('easypathutil')(__dirname);

const Client = rootdir.src.struct.client.Client.$require;

function SuyamikoApiClient(auth) {
  if (!(this instanceof SuyamikoApiClient)) return new SuyamikoApiClient(auth);
  return new Client(rootdir, auth);
}

module.exports = SuyamikoApiClient.SuyamikoApiClient = SuyamikoApiClient.default = SuyamikoApiClient;
