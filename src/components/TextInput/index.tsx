// External imports.
import React from 'react';
import { withTheme } from 'react-native-paper';

// Types imports.
import type Props from './Props';
import type { SelectItem } from './Props';

// Internal imports.
import styles from './styles';
import Text from '../Text';
import DefaultInput from './DefaultInput';

const getInput = (props: Props): React.ReactElement => {
  const { selectProps, ...other } = props;

  if (selectProps) {
  }

  return <DefaultInput {...other} />;
};

const TextInput = (props: Props): React.ReactElement => {
  const { topLabel, errorProps, theme } = props;

  return (
    <>
      {topLabel}
      {getInput(props)}
      {Boolean(errorProps?.errorMessage) && (
        <Text
          type="caption"
          style={[styles.error, { color: theme.colors.error }]}
          {...errorProps?.textProps}
        >
          {errorProps?.errorMessage}
        </Text>
      )}
    </>
  );
};

export default withTheme(TextInput);

export type { Props, SelectItem };
