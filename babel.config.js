module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-modules-commonjs', { loose: true }],
    ['@babel/plugin-transform-private-methods', { loose: true }],
  ],
};
