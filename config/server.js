module.exports = ({ env }) => ({
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 1337,
  cron:{
    enable: env.bool('CRON_ENABLE', false)
  },
  admin:{
    url: env('ADMIN_URL', '/__cms'),
    autoOpen: env('ADMIN_AUTO_OPEN', false)
  }
});
