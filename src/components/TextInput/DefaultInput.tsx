// External imports.
import React from 'react';
import { TextInput } from 'react-native-paper';
import { omit } from 'lodash';
import { ms } from 'react-native-size-matters';

// Types imports.
import type Props from './Props';
import type { TextInputLabelProp } from 'react-native-paper/lib/typescript/components/TextInput/types';

// Internal imports.
import styles from './styles';

const getLabel = (props: Props): undefined | TextInputLabelProp => {
  const { topLabelProps, isRequired, label } = props;

  if (topLabelProps) {
    return undefined;
  }

  if (label && typeof label === 'string') {
    return isRequired ? `${label} *` : label;
  }

  return label;
};

const getPlaceholder = (props: Props): undefined | string => {
  const { isRequired, placeholder } = props;
  return isRequired ? `${placeholder} *` : placeholder;
};

export default (props: Props): React.ReactElement => {
  const {
    dense,
    autoCapitalize,
    autoCorrect,
    error,
    errorProps,
    multiline,
    numberOfLines,
    returnKeyType,
    style,
    keyboardType,
    onChangeText,
    secureTextEntry,
    ...other
  } = props;

  const newProps = omit(other, [
    'topLabelProps',
    'isRequired',
    'label',
    'placeholder',
    'blurOnSubmit',
    'scrollEnabled',
  ]);

  const label = getLabel(props);
  let height;

  if (!multiline) {
    if (label) {
      if (props.mode === 'outlined') {
        height = ms(35);
      } else {
        height = ms(45);
      }
    } else {
      height = ms(35);
    }
  }

  return (
    <TextInput
      dense={dense === undefined ? true : dense}
      autoCapitalize={autoCapitalize === undefined ? 'none' : autoCapitalize}
      autoCorrect={autoCorrect === undefined ? false : autoCorrect}
      error={errorProps?.errorMessage ? true : error}
      label={label}
      placeholder={getPlaceholder(props)}
      multiline={secureTextEntry ? false : true}
      numberOfLines={
        secureTextEntry
          ? 1
          : numberOfLines === undefined
          ? multiline
            ? 0
            : 1
          : numberOfLines
      }
      blurOnSubmit={multiline ? false : true}
      returnKeyType={returnKeyType === undefined ? 'done' : returnKeyType}
      style={[
        styles.input,
        { height: height },
        style,
        { minHeight: multiline ? ms(70) : undefined },
      ]}
      keyboardType={keyboardType}
      onChangeText={(text: string) => {
        let editedText = text;

        if (
          keyboardType === 'decimal-pad' ||
          keyboardType === 'number-pad' ||
          keyboardType === 'name-phone-pad' ||
          keyboardType === 'numbers-and-punctuation' ||
          keyboardType === 'numeric' ||
          keyboardType === 'phone-pad'
        ) {
          editedText = editedText
            .replaceAll('٠', '0')
            .replaceAll('١', '1')
            .replaceAll('٢', '2')
            .replaceAll('٣', '3')
            .replaceAll('٤', '4')
            .replaceAll('٥', '5')
            .replaceAll('٦', '6')
            .replaceAll('٧', '7')
            .replaceAll('٨', '8')
            .replaceAll('٩', '9');
        }

        if (onChangeText) {
          onChangeText(editedText);
        }
      }}
      secureTextEntry={secureTextEntry}
      scrollEnabled={secureTextEntry ? false : Boolean(multiline)}
      {...newProps}
    />
  );
};
