import React from 'react';
import {Text, TouchableOpacityBox, TouchableOpacityBoxProps} from '@components';
import {buttonPresets} from './buttonPresets';

export type ButtonPreset = 'primary' | 'secondary';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  title,
  preset = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      justifyContent="center"
      alignItems="center"
      borderRadius="s15"
      height={60}
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      <Text
        bold
        preset="paragraphMedium"
        color={buttonPreset.content.color}
        {...buttonPreset.content.textProps}>
        {title}
      </Text>
    </TouchableOpacityBox>
  );
}
