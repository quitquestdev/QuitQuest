module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for Firebase
      ['@babel/plugin-transform-export-namespace-from'],
      // Required for React Navigation
      'react-native-reanimated/plugin',
      // Async storage
      ['module-resolver', {
        alias: {
          '@': './src',
        },
      }],
    ],
  };
};