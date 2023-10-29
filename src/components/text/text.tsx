import { ReactElement } from 'react';
import { Text as NativeText } from 'react-native';

import { TextProps } from './types';
import { getFontFamily } from './helpers';

export default function Text({
  children,
  style,
  weight,
  ...props
}: TextProps): ReactElement {
  const fontFamily = getFontFamily(weight);

  return (
    <NativeText {...props} style={[{ fontFamily }, style]}>
      {children}
    </NativeText>
  );
}
