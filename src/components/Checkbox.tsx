import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { DefaultTheme, TouchableRipple, Checkbox } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';

import Text from './Text';

import type { Props as TextProps } from './Text';

// #region Styles
const styles = ScaledSheet.create({
  container: {
    width: '100%',
    borderRadius: '8@msr',
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
    paddingHorizontal: '8@s',
  },
  text: {
    flex: 1,
    marginStart: '8@s',
  },
});
// #endregion

// #region Types
interface Props extends ViewProps {
  text?: string | null | undefined;
  checked?: boolean | null | undefined;
  onPress?: () => void | null | undefined;
  disabled?: boolean | undefined;
  checkedColor?: string | undefined;
  uncheckedColor?: string | undefined;
  textProps?: TextProps | null | undefined;
}
// #endregion

export default (props: Props): React.ReactElement => {
  const {
    text,
    checked,
    onPress,
    disabled,
    checkedColor,
    uncheckedColor,
    textProps,
    style,
    ...other
  } = props;

  const textProp = textProps || {};
  const { style: textStyle, ...rest } = textProp;

  const notNullCheckedColor: string =
    checkedColor == null || checkedColor === undefined
      ? DefaultTheme.colors.primary
      : checkedColor;

  const rippleColor = notNullCheckedColor.concat('40');

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
    <View style={[styles.container, style, styles.noPadding]} {...other}>
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
          <Checkbox.Android
            status={checked ? 'checked' : 'unchecked'}
            onPress={onPress}
            color={notNullCheckedColor}
            uncheckedColor={uncheckedColor}
            disabled={disabled}
          />
          {Boolean(text) && Boolean(text?.length) && (
            <Text style={[styles.text, textStyle]} {...rest}>
              {text}
            </Text>
          )}
        </View>
      </TouchableRipple>
    </View>
  );
};
