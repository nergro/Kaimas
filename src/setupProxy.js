const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: '',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    })
  );
};
