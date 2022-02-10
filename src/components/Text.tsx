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
import type { Theme } from 'react-native-paper/lib/typescript/types';
import type { TextProps } from 'react-native';

// #region Types
type TextType = 'normal' | 'bold' | 'caption';

export interface Props extends TextProps {
  size?: number;
  type?: TextType;
}

interface PropsWithTheme extends Props {
  theme: Theme;
}
// #endregion

const Text = (props: PropsWithTheme): React.ReactElement => {
  const { size, type, style, children, theme, ...other } = props;
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
    { color: theme.colors.text },
    style,
    {
      fontSize: ms(size == null || size === undefined ? defaultTextSize : size),
      lineHeight: ms(
        (size == null || size === undefined ? defaultTextSize : size) * 2
      ),
    },
  ];

  switch (type) {
    case 'caption':
      return (
        <Caption style={textStyle} {...other}>
          {children}
        </Caption>
      );

    case 'bold':
      return (
        <Title style={textStyle} {...other}>
          {children}
        </Title>
      );

    default:
      return (
        <PaperText style={textStyle} theme={theme} {...other}>
          {children}
        </PaperText>
      );
  }
};

export default withTheme(Text);
