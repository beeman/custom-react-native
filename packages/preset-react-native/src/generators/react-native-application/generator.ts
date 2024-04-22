import { formatFiles, installPackagesTask, Tree } from '@nx/devkit';
import {
  generateReactNativeApplication,
  NormalizedReactNativeApplicationSchema,
  normalizeReactNativeApplicationSchema,
} from '../../utils';
import { ReactNativeApplicationSchema } from './schema';

export async function reactNativeApplicationGenerator(
  tree: Tree,
  rawOptions: ReactNativeApplicationSchema
) {
  const options: NormalizedReactNativeApplicationSchema =
    normalizeReactNativeApplicationSchema(rawOptions);

  // Set up the base project.
  const project = await generateReactNativeApplication(tree, options);

  await formatFiles(tree);

  // Install the packages on exit.
  return () => {
    installPackagesTask(tree, true);
  };
}

export default reactNativeApplicationGenerator;
