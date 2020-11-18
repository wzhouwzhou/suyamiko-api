exports.default_options = {
  hostname: process.env.SUYAMIKOAPI_BETA ? 'api.localhost' : 'api.suya.moe',
  port: process.env.SUYAMIKOAPI_BETA ? 2087 : 443,
  headers: { 'Cache-Control': 'no-cache' },
  rejectUnauthorized: !process.env.SUYAMIKOAPI_BETA,
};

exports.base_url = process.env.SUYAMIKOAPI_BETA ? 'https://api.localhost:2087' : 'https://api.suya.moe';
