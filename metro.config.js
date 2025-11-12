const path = require('path')

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config')

const defaultConfig = getDefaultConfig(__dirname)
const { assetExts, sourceExts } = defaultConfig.resolver

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg', 'mjs'],
    extraNodeModules: {
      'react-dom': require.resolve('./polyfills/react-dom.js'),
    },
  },
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  watchFolders: [path.resolve(__dirname)],
}

module.exports = wrapWithReanimatedMetroConfig(
  mergeConfig(defaultConfig, config)
)
