import { getProjects, Tree } from '@nx/devkit';
import { Linter } from '@nx/eslint';
import { reactNativeApplicationGenerator } from '@nx/react-native';
import { NormalizedReactNativeApplicationSchema } from './normalize-react-native-application-schema';

export async function generateReactNativeApplication(
  tree: Tree,
  options: NormalizedReactNativeApplicationSchema
) {
  await reactNativeApplicationGenerator(tree, {
    name: options.name,
    directory: options.directory,
    style: 'css',
    projectNameAndRootFormat: 'as-provided',
    unitTestRunner: 'none',
    e2eTestRunner: 'none',
    linter: Linter.EsLint,
    pascalCaseFiles: false,
    classComponent: false,
    install: false,
    bundler: 'webpack',
  });

  return getProjects(tree).get(options.name);
}
