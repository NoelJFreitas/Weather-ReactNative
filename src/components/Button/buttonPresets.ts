import {ButtonPreset, TextProps, TouchableOpacityBoxProps} from '@components';
import {ThemeColors} from '@theme';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: {color: ThemeColors; textProps?: TextProps};
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: {color: 'grayWhite'},
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: {color: 'gray2'},
    },
  },
  secondary: {
    default: {
      container: {
        backgroundColor: 'yellowPrimary',
      },
      content: {color: 'grayWhite'},
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: {color: 'gray2'},
    },
  },
};
