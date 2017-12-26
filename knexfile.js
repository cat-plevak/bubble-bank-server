'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/bubble-bank-dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/bubble-bank-test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
