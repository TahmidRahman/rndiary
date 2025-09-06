import type { Config } from 'jest';
import { createJsWithBabelPreset, pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const jsWithBabelPreset = createJsWithBabelPreset({
  tsconfig: 'tsconfig.spec.json',
  babelConfig: true,
});

const jestConfig: Config = {
  preset: 'react-native',
  transform: jsWithBabelPreset.transform,
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-navigation|react-native-safe-area-context)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
};

export default jestConfig;
