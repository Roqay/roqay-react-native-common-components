import React from 'react';
import { View, ViewProps } from 'react-native';
import { TouchableRipple, Checkbox } from 'react-native-paper';
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
  ripple: {
    flex: 1,
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
  let rippleColor: string | undefined;

  if (checkedColor) {
    rippleColor = checkedColor.concat('40');
  }

  return (
    <View style={[styles.container, style]} {...other}>
      <TouchableRipple
        style={styles.ripple}
        onPress={onPress}
        disabled={disabled}
        rippleColor={rippleColor}
        underlayColor={rippleColor}
      >
        <View style={[styles.ripple, styles.rippleView]}>
          <Checkbox.Android
            status={checked ? 'checked' : 'unchecked'}
            onPress={onPress}
            color={checkedColor}
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
