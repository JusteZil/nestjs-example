const tsconfig = require('./tsconfig.json');

module.exports = {
  collectCoverageFrom: [
    'src/**',
    '!**/index.ts',
    '!**/*.module.ts',
    '!**/*.controller.ts',
  ],
  coverageDirectory: 'coverage',
  moduleDirectories: ['src', 'node_modules'],
  moduleNameMapper: {
    '^test/(.*)$': '<rootDir>/test/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
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
