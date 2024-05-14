import React from 'react';
import {ThemeColors} from '@theme';
import {Pressable} from 'react-native';
import {useAppTheme} from '@hooks';

import {ReturnIcon} from '../../assets/icons/ReturnIcon';
import {SearchIcon} from '../../assets/icons/SearchIcon';
import {WindIcon} from '../../assets/icons/WindIcon';
import {DropIcon} from '../../assets/icons/DropsIcon';
import {RainIcon} from '../../assets/icons/RainIcon';
import {LocationOutlineIcon} from '../../assets/icons/LocationOutlineIcon';
import {LocationIcon} from '../../assets/icons/LocationIcon';
import {PointIcon} from '../../assets/icons/PointIcon';
import {PointOutlineIcon} from '../../assets/icons/PointOutlineIcon';
import {UserIcon} from '../../assets/icons/UserIcon';
import {UserOutlineIcon} from '../../assets/icons/UserOutlineIcon';

const iconRegistry = {
  return: ReturnIcon,
  search: SearchIcon,
  wind: WindIcon,
  drop: DropIcon,
  rain: RainIcon,
  location: LocationIcon,
  locationOutline: LocationOutlineIcon,
  point: PointIcon,
  pointOutline: PointOutlineIcon,
  user: UserIcon,
  userOutline: UserOutlineIcon,
};

export type IconNames = keyof typeof iconRegistry;
export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
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
