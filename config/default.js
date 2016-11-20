module.exports = {
  port: 5000,
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://tonny:123@ds047672.mlab.com:47672/myblog'
};