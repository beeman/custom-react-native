import { readProjectConfiguration, Tree } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';

import { reactNativeApplicationGenerator } from './generator';
import { ReactNativeApplicationSchema } from './schema';

describe('react-native-application generator', () => {
  let tree: Tree;
  const options: ReactNativeApplicationSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await reactNativeApplicationGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
