module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@api': './src/api',
          '@store': './src/store',
          '@screens': './src/screens',
          '@localization': './src/localization',
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@designSystem': './src/designSystem',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@types': './src/types',
          '@hooks': './src/hooks',
        },
      },
    ],
    'react-native-worklets/plugin', // This MUST be the last plugin
  ],
}
