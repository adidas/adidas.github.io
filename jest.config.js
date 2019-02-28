module.exports = {
  collectCoverage: true,
  coverageDirectory: '<rootDir>/test/results/unit/coverage',
  testMatch: [ '<rootDir>/test/**/*.spec.js' ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleFileExtensions: [
    'js',
    'jsx'
  ]
};
