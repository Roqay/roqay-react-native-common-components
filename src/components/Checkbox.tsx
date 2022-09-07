// External imports.
import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import {
  withTheme,
  TouchableRipple,
  Checkbox as PaperCheckbox,
} from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';

// Types imports.
import type { Theme } from 'react-native-paper/lib/typescript/types';

// Internal imports.
import Text from './Text';
import type { Props as TextProps } from './Text';

// #region Styles
const styles = ScaledSheet.create({
  container: {
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
export interface Props extends ViewProps {
  text?: string;
  checked?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  checkedColor?: string;
  uncheckedColor?: string;
  textProps?: TextProps;
}

interface PropsWithTheme extends Props {
  theme: Theme;
}
// #endregion

const Checkbox = (props: PropsWithTheme): React.ReactElement => {
  const {
    text,
    checked,
    onPress,
    disabled,
    checkedColor,
    uncheckedColor,
    textProps,
    style,
    theme,
    ...other
  } = props;

  const { style: textStyle, ...rest } = textProps || {};

  const notNullCheckedColor: string =
    checkedColor == null || checkedColor === undefined
      ? theme.colors.primary
      : checkedColor;

  const rippleColor = notNullCheckedColor.concat('40');

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
          <PaperCheckbox.Android
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

export default withTheme(Checkbox);
