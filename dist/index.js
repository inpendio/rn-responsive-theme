
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./rn-responsive-theme.cjs.production.min.js')
} else {
  module.exports = require('./rn-responsive-theme.cjs.development.js')
}
