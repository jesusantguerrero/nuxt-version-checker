module.exports = {
    apps: [
      {
        name: 'SaaSIdeaValidator',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }