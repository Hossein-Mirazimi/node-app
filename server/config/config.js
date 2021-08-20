const env = process.env.NODE_ENV || 'development';
console.log(`*** ${env.toUpperCase()} ***`);

if(env === 'development' || env === 'test') {
  const config = require('./config.json');
  const envConfig = config[env];

  console.log(envConfig);

  Object.keys(envConfig).forEach(key => {
    process.env[key] = envConfig[key];
  });
}