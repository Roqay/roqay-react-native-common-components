// External imports.
import React from 'react';
import {
  withTheme,
  Text as PaperText,
  Title,
  Caption,
} from 'react-native-paper';
import { ms } from 'react-native-size-matters';

// Types imports.
import type { MD2Theme, MD3Theme, TextProps } from 'react-native-paper';

// #region Types
export type TextType = 'normal' | 'bold' | 'caption';

export interface Props extends TextProps<never> {
  size?: number;
  type?: TextType;
}

interface PropsWithTheme extends Props {
  theme: MD2Theme | MD3Theme;
}
// #endregion

const Text = (props: PropsWithTheme): React.ReactElement => {
  const { size, type, variant, style, children, theme, ...other } = props;
  let defaultTextSize: number = 13;

  switch (type) {
    case 'caption':
      defaultTextSize = 11;
      break;

    case 'bold':
      defaultTextSize = 15;
      break;

    default:
      defaultTextSize = 13;
      break;
  }

  const textStyle = [
    {
      color: theme.isV3 ? theme.colors.onBackground : theme.colors.text,
      fontSize:
        (size == null || size === undefined) &&
        (variant == null || variant === undefined)
          ? ms(defaultTextSize)
          : size
          ? ms(size)
          : variant && theme.isV3
          ? theme.fonts[variant].fontSize
          : undefined,
      lineHeight:
        (size == null || size === undefined) &&
        (variant == null || variant === undefined)
          ? ms(defaultTextSize) * 2
          : size
          ? ms(size) * 2
          : variant && theme.isV3
          ? theme.fonts[variant].lineHeight
          : undefined,
    },
    style,
  ];

  if (variant) {
    return (
      <PaperText style={textStyle} variant={variant} {...other}>
        {children}
      </PaperText>
    );
  }

  switch (type) {
    case 'caption':
      return theme.isV3 ? (
        <PaperText style={textStyle} variant="bodySmall" {...other}>
          {children}
        </PaperText>
      ) : (
        <Caption style={textStyle} {...other}>
          {children}
        </Caption>
      );

    case 'bold':
      return theme.isV3 ? (
        <PaperText style={textStyle} variant="titleMedium" {...other}>
          {children}
        </PaperText>
      ) : (
        <Title style={textStyle} {...other}>
          {children}
        </Title>
      );

    default:
      return (
        <PaperText style={textStyle} variant="bodyMedium" {...other}>
          {children}
        </PaperText>
      );
  }
};

export default withTheme(Text);
