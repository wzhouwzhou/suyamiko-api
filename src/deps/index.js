exports.NetConstants = require('./constants/NetConstants');
let __warned__ = false;
const { default: EndpointFactory } = require('./endpoints/default_endpoin.t');
const endpoints = ['neko', 'awoo', 'bang', 'bird', 'bite', 'blush', 'cat', 'cry', 'cuddle', 'dance', 'hug', 'kiss', 'lewd', 'lick',
  'lizard', 'neko', 'nom', 'nuzzle', 'pat', 'poke', 'pout', 'shrug', 'slap', 'sleepy', 'tickle'];

const _endpoints = {};
for (const endpoint of endpoints) {
  try {
    const exported = require(`./endpoints/${endpoint}.moe`);
    if (typeof exported.run !== 'function') throw new Error(`Endpoint file ${endpoint} has no run function.`);
    _endpoints[endpoint] = exported;
  } catch (err) {
    _endpoints[endpoint] = { name: endpoint, run: EndpointFactory(endpoint) };
  }
}

exports.endpoints = new Proxy(_endpoints, {
  has: () => !0,
  get: (o, p) => {
    if (p in _endpoints) return _endpoints[p];
    if (typeof p !== 'string') return undefined;
    if (!__warned__) {
      __warned__ = true;
      process.emitWarning(`You tried to access the [${p}] endpoint, which may or may not exist.
        Please note, no support will be given for any issues and you use this experimental endpoint at your own risk!`);
    }
    return { name: p, run: EndpointFactory(p) };
  },
});
