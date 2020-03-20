module.exports = {
  preset: '@testing-library/react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@?react-navigation)',
  ],
  testMatch: ['**/__tests__/**/*.test.js'],
  collectCoverageFrom: ['!src/service/api.js'],
  coverageDirectory: '__tests__/coverage',
  moduleNameMapper: {
    '^~/(.*)': '<rootDir>/src/$1',
  },
};
