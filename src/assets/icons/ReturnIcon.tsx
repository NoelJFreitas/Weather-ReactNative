import React from 'react';
import {Svg, Path, G} from 'react-native-svg';

import {IconBase} from '@components';

export function ReturnIcon({color = 'black', size = 20}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <G id="Arrow / Chevron_Left">
        <Path
          id="Vector"
          d="M15 19L8 12L15 5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}
