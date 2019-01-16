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
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};

