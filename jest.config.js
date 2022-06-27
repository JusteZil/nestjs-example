const tsconfig = require('./tsconfig.json');

module.exports = {
  collectCoverageFrom: [
    'src/**',
    '!**/index.ts',
    '!**/*.module.ts',
    '!**/*.controller.ts',
  ],
  coverageReporters: [['lcov', { projectRoot: '../' }]],
  coverageDirectory: 'coverage',
  moduleDirectories: ['src', 'node_modules'],
  moduleNameMapper: {
    '^test/(.*)$': '<rootDir>/test/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  testRegex: '.*\\.spec\\.ts$',
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'ts'],
  globals: {
    'ts-jest': {
      tsconfig: {
        ...tsconfig.compilerOptions,
        noEmitOnError: false,
      },
      diagnostics: {
        warnOnly: true,
      },
    },
  },
};
