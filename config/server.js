module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: "L87rfv2zbfeD/VHH8HlFLw==,+qPNuGq8JCLfMpcXmfpMqA==,lkryBWnCBmyRLPCKIkM2dw==,HBwbvcCxGKpjL0Tihn4aMA==",
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
