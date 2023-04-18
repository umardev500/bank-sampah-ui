module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          // This needs to be mirrored in tsconfig.json
          components: './src/components',
          assets: './assets',
          constants: './src/constants',
          helpers: './src/helpers',
          hooks: './src/hooks',
          types: './src/types',
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
        ],
      },
    ],
  ],
};
