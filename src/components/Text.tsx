import React from 'react';
import { Text, Title, Caption } from 'react-native-paper';
import { ms } from 'react-native-size-matters';

import type { TextProps } from 'react-native';

// #region Types
type TextType = 'normal' | 'bold' | 'caption';

export interface Props extends TextProps {
  size?: number | null | undefined;
  type?: TextType | null | undefined;
}
// #endregion

export default (props: Props): React.ReactElement => {
  const { size, type, style, children, ...other } = props;
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
        <Text style={textStyle} {...other}>
          {children}
        </Text>
      );
  }
};
