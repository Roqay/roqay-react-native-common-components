// External imports.
import React from 'react';
import { View, ViewProps, StyleSheet, FlexAlignType } from 'react-native';
import {
  withTheme,
  TouchableRipple,
  RadioButton as PaperRadioButton,
} from 'react-native-paper';
import { ScaledSheet, ms, s } from 'react-native-size-matters';
import tinyColor from 'tinycolor2';

// Types imports.
import type { MD2Theme, MD3Theme } from 'react-native-paper';

// Internal imports.
import Text from './Text';
import type { Props as TextProps } from './Text';

// #region Styles
const styles = ScaledSheet.create({
  container: {
    borderRadius: ms(8),
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
    paddingHorizontal: s(8),
  },
  text: {
    marginStart: s(8),
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
  textProps?: Omit<TextProps, 'children'>;
  contentAlign?: FlexAlignType;
}

interface PropsWithTheme extends Props {
  theme: MD2Theme | MD3Theme;
}
// #endregion

const RadioButton = (props: PropsWithTheme): React.ReactElement => {
  const {
    text,
    checked,
    onPress,
    disabled,
    checkedColor,
    uncheckedColor,
    textProps,
    contentAlign,
    style,
    theme,
    ...other
  } = props;

  const { style: textStyle, ...rest } = textProps || {};

  const notNullCheckedColor: string =
    checkedColor == null || checkedColor === undefined
      ? theme.colors.primary
      : checkedColor;

  const rippleColor = tinyColor(notNullCheckedColor)
    .setAlpha(0.25)
    .toHex8String();

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
              alignItems: contentAlign || 'center',
            },
          ]}
        >
          <PaperRadioButton.Android
            value={text == null || text === undefined ? 'radio' : text}
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

export default withTheme(RadioButton);
