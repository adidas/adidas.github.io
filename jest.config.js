module.exports = {
  collectCoverage: true,
  mapCoverage: true,
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
