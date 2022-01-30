import React from 'react';
import { View, Image, ViewProps, StyleSheet } from 'react-native';
import { DefaultTheme, TouchableRipple } from 'react-native-paper';
import { ScaledSheet, ms } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Text from './Text';

import type { Props as TextProps } from './Text';

// #region Styles
const styles = ScaledSheet.create({
  container: {
    backgroundColor: DefaultTheme.colors.primary,
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
interface Props extends ViewProps {
  text?: string | null | undefined;
  startImage?: number | null | undefined;
  startVector?: number | null | undefined;
  startIconName?: string | null | undefined;
  endImage?: number | null | undefined;
  endVector?: number | null | undefined;
  endIconName?: string | null | undefined;
  onPress?: () => void | null | undefined;
  disabled?: boolean | undefined;
  iconSize?: number | null | undefined;
  noIconTint?: boolean | null | undefined;
  textProps?: TextProps | null | undefined;
}

interface IconProps {
  image?: number | null | undefined;
  vector?: number | null | undefined;
  iconName?: string | null | undefined;
  size: number;
  color: string | undefined;
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

export default (props: Props): React.ReactElement => {
  const {
    text,
    startImage,
    startVector,
    startIconName,
    endImage,
    endVector,
    endIconName,
    onPress,
    disabled,
    iconSize,
    noIconTint,
    textProps,
    style,
    ...other
  } = props;

  const textProp = textProps || {};
  const { style: textStyle, type, ...rest } = textProp;

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

  const flattenStyle = StyleSheet.flatten(style);

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
      style={[styles.container, style, enabledStyle, styles.noPadding]}
      {...other}
    >
      <TouchableRipple
        onPress={onPress}
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
