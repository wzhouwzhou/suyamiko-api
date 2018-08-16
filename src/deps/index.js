exports.NetConstants = require('./constants/NetConstants');

const { default: EndpointFactory } = require('./endpoints/default_endpoin.t');
const endpoints = ['neko', 'awoo', 'bang', 'bite', 'blush', 'cat', 'cry', 'cuddle', 'dance', 'hug', 'kiss', 'lewd', 'lick', 'lizard',
  'neko', 'nom', 'nuzzle', 'pat', 'poke', 'pout', 'shrug', 'slap', 'sleepy', 'tickle'];

exports.endpoints = {};
for (const endpoint of endpoints) {
  try {
    const exported = require(`./endpoints/${endpoint}.moe`);
    if (typeof exported.run === 'function') throw new Error(`Endpoint file ${endpoint} has no run function.`);
    exports.endpoints[endpoint] = exported;
  } catch (err) {
    exports.endpoints[endpoint] = { name: endpoint, run: EndpointFactory(endpoint) };
  }
}
