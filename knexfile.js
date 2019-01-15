// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/springs'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-springs'
  },
};
