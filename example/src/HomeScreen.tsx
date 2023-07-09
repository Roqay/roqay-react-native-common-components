import React from 'react';
import {ScaledSheet, vs} from 'react-native-size-matters';
import {ScrollView, Button} from 'roqay-react-native-common-components';

export default function HomeScreen({navigation}: {navigation: any}) {
  const _openScreen = (screenName: string) => navigation.navigate(screenName);

  return (
    <ScrollView>
      <Button
        style={styles.button}
        onPress={() => _openScreen('AlertDialog')}
        text="AlertDialog"
      />
      <Button
        style={styles.button}
        onPress={() => _openScreen('Button')}
        text="Button"
      />
      <Button
        style={styles.button}
        onPress={() => _openScreen('Card')}
        text="Card"
      />
      <Button
        style={styles.button}
        onPress={() => _openScreen('Checkbox')}
        text="Checkbox"
      />
      <Button
        style={styles.button}
        onPress={() => _openScreen('Dialog')}
        text="Dialog"
      />
      <Button
        style={styles.button}
        onPress={() => _openScreen('IconButton')}
        text="IconButton"
      />
      <Button
        style={styles.button}
        onPress={() => _openScreen('ImagePlaceholder')}
        text="ImagePlaceholder"
      />
      <Button
        style={styles.button}
        onPress={() => _openScreen('LoadingDialog')}
        text="LoadingDialog"
      />
      <Button
        style={styles.button}
        onPress={() => _openScreen('RadioButton')}
        text="RadioButton"
      />
      <Button
        style={styles.button}
        onPress={() => _openScreen('SelectDialog')}
        text="SelectDialog"
      />
      <Button
        style={styles.button}
        onPress={() => _openScreen('TextInput')}
        text="TextInput"
      />
      <Button
        style={styles.button}
        onPress={() => _openScreen('Text')}
        text="Text"
      />
      <Button
        style={styles.button}
        onPress={() => _openScreen('Utils')}
        text="Utils"
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
});
