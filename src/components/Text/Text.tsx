import {createText} from '@shopify/restyle';
import {Theme} from '@theme';
import React from 'react';

const RSTExt = createText<Theme>();
type RSTextProps = React.ComponentProps<typeof RSTExt>;

interface TextProps extends RSTextProps {}

export function Text({children, ...textProps}: TextProps) {
  return <RSTExt {...textProps}>{children}</RSTExt>;
}
