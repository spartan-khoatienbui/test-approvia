import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.paths.json';

export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  modulePathIgnorePatterns: ['demo'],
};
