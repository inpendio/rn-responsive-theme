/* eslint-disable global-require */

module.exports = {
  // ...
  plugins: [
    // ... other plugins
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: './',
        alias: {
          utils: './src/utils',
          hooks: './src/hooks',
          contexts: './src/contexts',
          providers: './src/providers',
        },
      },
    ],
  ],
};
