module.exports = {
  npm: {
    globals: {
      ajax: '@fdaciuk/ajax'
    }
  },

  files: {
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'}
  },

  plugins: {
    autoprefixer: {
      browsers: ["last 3 version"],
      cascade: false
    },
    es6ModuleTranspiler: {
      match: /^app/,
      debug: true
    },
    babel: {
      presets: ['es2015'],
      ignore: [
        /^(bower_components|vendor)/,
        'app/legacyES5Code/**/*'
      ],
      pattern: /\.(es6|js)$/
    }
  }
}
