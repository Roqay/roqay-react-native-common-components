import React from 'react';
import { ScrollView } from 'react-native';
import { TextInput } from 'roqay-react-native-common-components';
import { ScaledSheet } from 'react-native-size-matters';

export default function TextInputScreen() {
  const [value, setValue] = React.useState('');

  const _onChangeText = (text: string) => setValue(text);

  return (
    <ScrollView>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={_onChangeText}
        placeholder="Normal"
        label="Normal"
      />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={_onChangeText}
        multiline
        placeholder="Multiline"
        label="Multiline"
      />
      {/* <TextInput
        style={styles.input}
        value={value}
        onChangeText={_onChangeText}
        placeholder="Required"
        label="Required"
        isRequired
      /> */}
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
