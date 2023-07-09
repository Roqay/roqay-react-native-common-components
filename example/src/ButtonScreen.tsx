import React from 'react';
import {ScrollView, Button} from 'roqay-react-native-common-components';
import {ScaledSheet, vs, s, ms} from 'react-native-size-matters';

export default function ButtonScreen() {
  const _onPress = () => {};

  return (
    <ScrollView>
      <Button style={styles.button} onPress={_onPress} text="Simple Button" />
      <Button
        style={styles.button}
        startImage={require('./information.png')}
        onPress={_onPress}
        text="Button With Image"
      />
      <Button
        style={styles.button}
        startVector={require('./information.svg')}
        onPress={_onPress}
        text="Button With Vector"
      />
      <Button
        style={styles.button}
        startIconName="information"
        onPress={_onPress}
        text="Button With Icon"
      />
      <Button
        style={styles.customButton}
        endIconName="information"
        onPress={_onPress}
        text="Custom Button"
        iconSize={18}
      />
    </ScrollView>
  );
}

const styles = ScaledSheet.create({
  button: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: vs(8),
  },
  customButton: {
    alignSelf: 'center',
    marginVertical: vs(8),
    paddingHorizontal: s(16),
    paddingVertical: vs(4),
    borderRadius: ms(8),
  },
});
