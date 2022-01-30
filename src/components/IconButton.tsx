import React from 'react';
import { View, Image, ViewProps } from 'react-native';
import { DefaultTheme, TouchableRipple } from 'react-native-paper';
import { ScaledSheet, ms } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// #region Styles
const styles = ScaledSheet.create({
  container: {
    overflow: 'hidden',
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
  image?: number | null | undefined;
  vector?: number | null | undefined;
  iconName?: string | null | undefined;
  size?: number | null | undefined;
  color?: string | null | undefined;
  onPress?: () => void | null | undefined;
  disabled?: boolean | undefined;
  iconPercent?: number | null | undefined;
}

interface IconProps {
  image?: number | null | undefined;
  vector?: number | null | undefined;
  iconName?: string | null | undefined;
  size: number;
  color: string;
  iconPercent?: number | null | undefined;
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

export default (props: Props): React.ReactElement => {
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
    ...other
  } = props;

  const notNullSize: number = ms(
    size == null || size === undefined ? 36 : size
  );

  const notNullColor: string =
    color == null || color === undefined ? DefaultTheme.colors.primary : color;

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
      ]}
      {...other}
    >
      <TouchableRipple
        style={styles.ripple}
        onPress={onPress}
        disabled={disabled}
        rippleColor={rippleColor}
        underlayColor={rippleColor}
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
