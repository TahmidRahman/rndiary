module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@/components': './src/components',
          '@/ctx': './src/ctx',
          '@/store': './src/store',
          '@/screens': './src/screens',
          '@/navigation': './src/navigation',
        },
      },
    ],
  ],
};
