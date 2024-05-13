import React from 'react';
import {ThemeColors} from '@theme';
import {Pressable} from 'react-native';
import {useAppTheme} from '@hooks';

import {ReturnIcon} from '../../assets/icons/ReturnIcon';
import {SearchIcon} from '../../assets/icons/SearchIcon';
import {WindIcon} from '../../assets/icons/WindIcon';
import {DropIcon} from '../../assets/icons/DropsIcon';
import {RainIcon} from '../../assets/icons/RainIcon';

const iconRegistry = {
  return: ReturnIcon,
  search: SearchIcon,
  wind: WindIcon,
  drop: DropIcon,
  rain: RainIcon,
};

export type IconNames = keyof typeof iconRegistry;
export interface IconBase {
  size?: number;
  color?: string;
}

interface IconProps {
  name: IconNames;
  size?: number;
  color?: ThemeColors;
  onPress?: () => void;
}

export function Icon({
  name,
  onPress,
  color = 'grayBlack',
  size = 25,
}: IconProps) {
  const SVGIcon = iconRegistry[name];
  const {colors} = useAppTheme();

  if (onPress) {
    return (
      <Pressable onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} size={size} />;
}
