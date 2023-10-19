const { buildEngine } = require('ember-engines/lib/engine-addon');

module.exports = buildEngine({
  name: 'test-engine',
  lazyLoading: {
    enabled: false
  }
});
