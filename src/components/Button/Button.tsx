import React from 'react';
import {Text, TouchableOpacityBox, TouchableOpacityBoxProps} from '@components';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
}

export function Button({title, ...buttonProps}: ButtonProps) {
  return (
    <TouchableOpacityBox
      backgroundColor="primary"
      justifyContent="center"
      alignItems="center"
      borderRadius="s15"
      height={60}
      {...buttonProps}>
      <Text bold color="background">
        {title}
      </Text>
    </TouchableOpacityBox>
  );
}
