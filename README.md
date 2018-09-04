<div align="center">
    <br />
    <p>
        <a class="badge-align" href="https://www.codacy.com/app/wzhouwzhou/suyamiko-api?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=wzhouwzhou/suyamiko-api&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/84d0dc1ef2f5477eb609f73f2204dbc2"/></a>
        <a href="https://www.npmjs.com/package/suyamiko-api"><img src="https://img.shields.io/npm/v/suyamiko-api.svg" alt="NPM version" /></a>
        <a href="https://www.npmjs.com/package/suyamiko-api"><img src="https://img.shields.io/npm/dt/suyamiko-api.svg" alt="NPM downloads" /></a>
        <a href="https://david-dm.org/wzhouwzhou/suyamiko-api"><img src="https://img.shields.io/david/wzhouwzhou/suyamiko-api.svg" alt="Dependencies" /></a>
        <a href="https://paypal.me/wzhouwzhou"><img src="https://img.shields.io/badge/donate-paypal-009cde.svg" alt="Paypal" /></a>
    </p>
    <p>
        <a href="https://nodei.co/npm/suyamiko-api/"><img src="https://nodei.co/npm/suyamiko-api.png?stars=true&downloads=true"></a>
    </p>
</div>

# Suyamiko-API
## A simple wrapper around the Suyamiko Bot's API

A bridge to the world of moe (and other services provided by the suya.moe API)!

`npm install suyamiko-api@1.0.1`

https://api.suya.moe/cdn.gif?awoo=SGs0VlhIbVBiZQ.gif

![awoo](https://api.suya.moe/cdn.gif?awoo=SGs0VlhIbVBiZQ.gif)

The Suyamiko API is private, thus this package is not meant to be used by people who do not have prior authorization to use it.

Easy setup

    const ApiClient = require('suyamiko-api');
    const token = 'API TOKEN HERE';

    const client = new ApiClient(token); // To set a new token: client.set_token('new token')

    client.neko().then(console.log)
    const another_url = await client.neko();

Endpoints is defined as:

    const endpoints = [
      'neko', 'awoo', 'bang', 'bite', 'blush',
      'cat', 'cry', 'cuddle', 'dance', 'hug',
      'kiss', 'lewd', 'lick', 'lizard', 'neko',
      'nom', 'nuzzle', 'pat', 'poke', 'pout',
      'shrug', 'slap', 'sleepy', 'tickle'
    ];

Any of these are methods of the client:

client.cuddle(), client.slap(), etc

All endpoints return promises that resolve to a url. As with all promises, append a .catch to catch errors if not using await.

    try {
      const url = await client.pout();
    } catch (err) {
      console.error(err);
    }

Request handling errors (hopefully) contain three properties: error, code, and message

• error contains an Error object with a stack trace error.stack

• code contains the status code of the request

• message contains the body returned by the server. If possible, it will be a parsed JSON.

Common errors:

Error code 401, message `{ error: 'Invalid Authorization Received for protected endpoint' }`

• Problem: The key you provided was invalid.
• Solution: Contact the owner of the API on discord via Kazuko#0180

Other errors: Open an issue on github or contact me on discord at William Zhou#0001 via https://discord.gg/jj5FzF7
