// External imports.
import React from 'react';
import { View, Image, ViewProps } from 'react-native';
import { withTheme, TouchableRipple } from 'react-native-paper';
import { ScaledSheet, ms } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Types imports.
import type { Theme } from 'react-native-paper/lib/typescript/types';

// #region Styles
const styles = ScaledSheet.create({
  container: {
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
  ripple: {
    flex: 1,
  },
  rippleView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    resizeMode: 'contain',
  },
});
// #endregion

// #region Types
interface Props extends ViewProps {
  image?: number;
  vector?: number;
  iconName?: string;
  size?: number;
  color?: string;
  onPress?: () => void;
  disabled?: boolean;
  iconPercent?: number;
  theme: Theme;
}

interface IconProps {
  image?: number;
  vector?: number;
  iconName?: string;
  size: number;
  color: string;
  iconPercent?: number;
}
// #endregion

const getIcon = (props: IconProps): null | React.ReactElement => {
  const { image, vector, iconName, size, color, iconPercent } = props;

  const notNullIconPercent: number =
    iconPercent == null || iconPercent === undefined ? 60 : iconPercent;

  const iconSize: number = (size * notNullIconPercent) / 100;

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

const IconButton = (props: Props): React.ReactElement => {
  const {
    image,
    vector,
    iconName,
    size,
    color,
    onPress,
    disabled,
    iconPercent,
    style,
    theme,
    ...other
  } = props;

  const notNullSize: number = ms(
    size == null || size === undefined ? 36 : size
  );

  const notNullColor: string =
    color == null || color === undefined ? theme.colors.primary : color;

  const enabledStyle = {
    opacity: disabled ? 0.5 : 1.0,
  };

  const rippleColor = notNullColor.concat('40');

  return (
    <View
      style={[
        styles.container,
        {
          borderRadius: notNullSize / 2,
        },
        style,
        {
          width: notNullSize,
          height: notNullSize,
        },
        enabledStyle,
        styles.noPadding,
      ]}
      {...other}
    >
      <TouchableRipple
        style={styles.ripple}
        onPress={onPress}
        disabled={disabled}
        rippleColor={rippleColor}
        underlayColor={rippleColor}
        theme={theme}
      >
        <View style={[styles.ripple, styles.rippleView]}>
          {getIcon({
            image,
            vector,
            iconName,
            size: notNullSize,
            color: notNullColor,
            iconPercent,
          })}
        </View>
      </TouchableRipple>
    </View>
  );
};

export default withTheme(IconButton);
