module.exports = {
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico'
    }
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        'linux': {
          'target': [
            {
              'target': 'snap',
              'arch': ['arm64', 'x64']
            }
          ]
        },
        'snap': {
          'confinement': 'devmode',
          'grade': 'devel',
          'plugs': ['default', 'network-bind']
        }
      }
    }
  }
}
