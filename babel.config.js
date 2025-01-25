module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          "@assets": './src/assets',
          "@features": './src/features',
          "@navigation": './src/navigation',
          "@components": './src/components',
          "@styles": './src/styles',
          "@utils": './src/utils',
          "@service": './src/service',
          "@state": './src/state'
        }
      },
    ],
    'react-native-reanimated/plugin' // This should be present
  ]
};