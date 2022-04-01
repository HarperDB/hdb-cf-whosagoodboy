'use strict';

module.exports = async (server, { hdbCore, logger }) => {
  server.route({
    url: '/',
    method: 'GET',
    handler: () => {
      return { message: "You are!" };
    },
  })
};
