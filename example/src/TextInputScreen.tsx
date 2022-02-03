import React from 'react';
import { ScrollView } from 'react-native';
import { TextInput } from 'roqay-react-native-common-components';
import { ScaledSheet } from 'react-native-size-matters';

export default function TextInputScreen() {
  const [normalValue, setNormalValue] = React.useState('');
  const [multilineValue, setMultilineValue] = React.useState('');
  const [requiredValue, setRequiredValue] = React.useState('');
  const [outlinedValue, setOutlinedValue] = React.useState('');
  const [topLabelValue, setTopLabelValue] = React.useState('');

  const _onChangeTextNormal = (text: string) => setNormalValue(text);

  const _onChangeTextMultiline = (text: string) => setMultilineValue(text);

  const _onChangeTextRequired = (text: string) => setRequiredValue(text);

  const _onChangeTextOutlined = (text: string) => setOutlinedValue(text);

  const _onChangeTextTopLabel = (text: string) => setTopLabelValue(text);

  return (
    <ScrollView>
      <TextInput
        style={styles.input}
        value={normalValue}
        onChangeText={_onChangeTextNormal}
        placeholder="Normal"
        label="Normal"
      />
      <TextInput
        style={styles.input}
        value={multilineValue}
        onChangeText={_onChangeTextMultiline}
        multiline
        placeholder="Multiline"
        label="Multiline"
      />
      <TextInput
        style={styles.input}
        value={requiredValue}
        onChangeText={_onChangeTextRequired}
        placeholder="Required"
        label="Required"
        isRequired
      />
      <TextInput
        mode="outlined"
        style={styles.input}
        value={outlinedValue}
        onChangeText={_onChangeTextOutlined}
        placeholder="Outlined"
        label="Outlined"
      />
      <TextInput
        style={styles.input}
        value={topLabelValue}
        onChangeText={_onChangeTextTopLabel}
        placeholder="Top Label"
        errorProps={{
          errorMessage: 'Error',
        }}
        topLabelProps={{
          label: 'Top Label',
        }}
      />
    </ScrollView>
  );
}

const styles = ScaledSheet.create({
  input: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: '8@vs',
  },
});
