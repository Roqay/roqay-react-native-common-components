import React from 'react';
import {ScrollView, Checkbox} from 'roqay-react-native-common-components';
import {ScaledSheet} from 'react-native-size-matters';

export default function CheckboxScreen() {
  const [checked, setChecked] = React.useState(false);
  const _onPress = () => setChecked(!checked);

  return (
    <ScrollView>
      <Checkbox style={styles.checkbox} text="Unchecked" />
      <Checkbox style={styles.checkbox} text="Checked" checked />
      <Checkbox style={styles.checkbox} text="Disabled" disabled />
      <Checkbox
        style={styles.checkbox}
        text="Click Me"
        checked={checked}
        onPress={_onPress}
      />
    </ScrollView>
  );
}

const styles = ScaledSheet.create({
  checkbox: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: '8@vs',
  },
});
