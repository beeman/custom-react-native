import { ReactNativeApplicationSchema } from '../generators/react-native-application/schema';

export type NormalizedReactNativeApplicationSchema =
  Required<ReactNativeApplicationSchema> & {
    directory: string;
  };

export function normalizeReactNativeApplicationSchema(
  options: ReactNativeApplicationSchema
): NormalizedReactNativeApplicationSchema {
  return {
    ...options,
    directory: options.name,
  };
}
