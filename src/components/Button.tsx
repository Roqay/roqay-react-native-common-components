// External imports.
import React from 'react';
import { View, Image, ViewProps, StyleSheet } from 'react-native';
import { withTheme, TouchableRipple } from 'react-native-paper';
import { ScaledSheet, ms } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Types imports.
import type { MD2Theme, MD3Theme } from 'react-native-paper';

// Internal imports.
import Text from './Text';
import type { Props as TextProps } from './Text';
import type { IconProps } from './IconButton';

// #region Styles
const styles = ScaledSheet.create({
  container: {
    borderRadius: '16@msr',
    overflow: 'hidden',
  },
  noPadding: {
    padding: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingStart: 0,
    paddingEnd: 0,
    paddingRight: 0,
    paddingLeft: 0,
  },
  rippleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    resizeMode: 'contain',
  },
  text: {
    color: '#ffffff',
    marginHorizontal: '4@msr',
  },
});
// #endregion

// #region Types
export interface Props extends ViewProps {
  text?: string;
  startImage?: number;
  startVector?: number;
  startIconName?: string;
  endImage?: number;
  endVector?: number;
  endIconName?: string;
  onPress?: () => void;
  onLongPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  disabled?: boolean;
  iconSize?: number;
  noIconTint?: boolean;
  textProps?: Omit<TextProps, 'children'>;
}

interface PropsWithTheme extends Props {
  theme: MD2Theme | MD3Theme;
}
// #endregion

const getIcon = (props: IconProps): null | React.ReactElement => {
  const { image, vector, iconName, size, color } = props;
  const iconSize: number = ms(size);

  const iconStyle = [
    styles.icon,
    {
      width: iconSize,
      height: iconSize,
      tintColor: color,
    },
  ];

  if (image) {
    return <Image source={image} style={iconStyle} resizeMode="contain" />;
  }

  if (vector) {
    try {
      const VectorImage = require('react-native-vector-image').default;

      return (
        <VectorImage source={vector} style={iconStyle} resizeMode="contain" />
      );
    } catch (error) {
      return null;
    }
  }

  if (iconName) {
    return <Icon name={iconName} color={color} size={iconSize} />;
  }

  return null;
};

const Button = (props: PropsWithTheme): React.ReactElement => {
  const {
    text,
    startImage,
    startVector,
    startIconName,
    endImage,
    endVector,
    endIconName,
    onPress,
    onLongPress,
    onPressIn,
    onPressOut,
    disabled,
    iconSize,
    noIconTint,
    textProps,
    style,
    theme,
    ...other
  } = props;

  const { style: textStyle, type, ...rest } = textProps || {};

  const enabledStyle = {
    opacity: disabled ? 0.5 : 1.0,
  };

  const textColor = StyleSheet.flatten(
    textStyle == null || textStyle === undefined ? styles.text : textStyle
  ).color?.toString();

  const rippleColor = textColor?.concat('40');

  const notNullIconSize: number = ms(
    iconSize == null || iconSize === undefined ? 24 : iconSize
  );

  const iconColor = noIconTint ? undefined : textColor;

  const flattenStyle = StyleSheet.flatten(
    style == null || style === undefined ? {} : style
  );

  const {
    padding,
    paddingHorizontal,
    paddingVertical,
    paddingTop,
    paddingBottom,
    paddingStart,
    paddingEnd,
    paddingRight,
    paddingLeft,
  } = flattenStyle;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.primary },
        style,
        enabledStyle,
        styles.noPadding,
      ]}
      {...other}
    >
      <TouchableRipple
        onPress={onPress}
        onLongPress={onLongPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={disabled}
        rippleColor={rippleColor}
        underlayColor={rippleColor}
      >
        <View
          style={[
            styles.rippleView,
            {
              padding,
              paddingHorizontal,
              paddingVertical,
              paddingTop,
              paddingBottom,
              paddingStart,
              paddingEnd,
              paddingRight,
              paddingLeft,
            },
          ]}
        >
          {getIcon({
            image: startImage,
            vector: startVector,
            iconName: startIconName,
            size: notNullIconSize,
            color: iconColor,
          })}
          <Text
            style={[styles.text, textStyle]}
            type={type == null || type === undefined ? 'bold' : type}
            {...rest}
          >
            {text}
          </Text>
          {getIcon({
            image: endImage,
            vector: endVector,
            iconName: endIconName,
            size: notNullIconSize,
            color: iconColor,
          })}
        </View>
      </TouchableRipple>
    </View>
  );
};

export default withTheme(Button);
