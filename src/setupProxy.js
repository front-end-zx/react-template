const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.BASE_URL,
      changeOrigin: true,
      pathRewrite: {
        '^api/': ''
      }
    })
  );
};