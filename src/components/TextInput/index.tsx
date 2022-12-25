// External imports.
import React from 'react';
import { withTheme } from 'react-native-paper';
import { set, omit } from 'lodash';

// Types imports.
import type Props from './Props';
import type { PropsWithTheme } from './Props';

// Internal imports.
import Text from '../Text';
import DefaultInput from './DefaultInput';
import SelectInput from './SelectInput';
import styles from './styles';

const getInput = (props: Props): React.ReactElement => {
  const { selectProps, ...other } = props;

  if (selectProps) {
    return <SelectInput {...props} />;
  }

  return <DefaultInput {...other} />;
};

const TextInput = (props: PropsWithTheme): React.ReactElement => {
  const { topLabelProps, errorProps, theme } = props;

  const {
    type: labelType,
    size: labelSize,
    style: labelStyle,
    ...other
  } = topLabelProps?.textProps || {};

  const {
    type: errorType,
    style: errorStyle,
    ...rest
  } = errorProps?.textProps || {};

  const {
    marginVertical,
    marginTop,
    marginBottom,
    width,
    marginHorizontal,
    marginStart,
    marginEnd,
    marginLeft,
    marginRight,
    alignSelf,
  } = props.style || {};

  const widthHorizontalMarginStyle = {
    width,
    marginHorizontal,
    marginStart,
    marginEnd,
    marginLeft,
    marginRight,
    alignSelf,
  };

  let inputStyle;

  if (topLabelProps && errorProps) {
    inputStyle = [
      styles.noVerticalMargin,
      omit(props.style || {}, ['marginVertical', 'marginTop', 'marginBottom']),
    ];
  } else if (topLabelProps) {
    inputStyle = [
      styles.noVerticalMargin,
      omit(props.style || {}, ['marginVertical', 'marginTop', 'marginBottom']),
      { marginBottom: marginVertical || marginBottom },
    ];
  } else if (errorProps) {
    inputStyle = [
      styles.noVerticalMargin,
      omit(props.style || {}, ['marginVertical', 'marginTop', 'marginBottom']),
      { marginTop: marginVertical || marginTop },
    ];
  } else {
    inputStyle = props.style;
  }

  return (
    <>
      {Boolean(topLabelProps?.label) && (
        <Text
          type={labelType || 'bold'}
          size={labelSize || 13}
          style={[
            styles.noVerticalMargin,
            {
              color: theme.isV3 ? theme.colors.onBackground : theme.colors.text,
              marginTop: marginVertical || marginTop,
            },
            widthHorizontalMarginStyle,
            labelStyle,
          ]}
          {...other}
        >
          {topLabelProps?.label}
        </Text>
      )}
      {getInput(set(props, 'style', inputStyle))}
      {Boolean(errorProps?.errorMessage) && (
        <Text
          type={errorType || 'caption'}
          style={[
            styles.noVerticalMargin,
            {
              color: theme.colors.error,
              marginBottom: marginVertical || marginBottom,
            },
            widthHorizontalMarginStyle,
            errorStyle,
          ]}
          {...rest}
        >
          {errorProps?.errorMessage}
        </Text>
      )}
    </>
  );
};

export default withTheme(TextInput);
