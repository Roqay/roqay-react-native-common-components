import React from 'react';
import { ScrollView } from 'react-native';
import { RadioButton } from 'roqay-react-native-common-components';
import { ScaledSheet } from 'react-native-size-matters';

export default function RadioButtonScreen() {
  const [checked, setChecked] = React.useState(false);
  const _onPress = () => setChecked(!checked);

  return (
    <ScrollView>
      <RadioButton style={styles.radioButton} text="Unchecked" />
      <RadioButton style={styles.radioButton} text="Checked" checked />
      <RadioButton style={styles.radioButton} text="Disabled" disabled />
      <RadioButton
        style={styles.radioButton}
        text="Click Me"
        checked={checked}
        onPress={_onPress}
      />
    </ScrollView>
  );
}

const styles = ScaledSheet.create({
  radioButton: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: '8@vs',
  },
});
