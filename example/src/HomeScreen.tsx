import React from 'react';
import { ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { Button } from 'eslam-elmeniawy-components';

export default function HomeScreen({ navigation }: { navigation: any }) {
  const openScreen = (screenName: string) => navigation.navigate(screenName);

  return (
    <ScrollView>
      <Button
        style={styles.button}
        onPress={() => openScreen('Button')}
        text="Button"
      />
      <Button
        style={styles.button}
        onPress={() => openScreen('Checkbox')}
        text="Checkbox"
      />
      <Button
        style={styles.button}
        onPress={() => openScreen('Dialog')}
        text="Dialog"
      />
      <Button
        style={styles.button}
        onPress={() => openScreen('IconButton')}
        text="IconButton"
      />
      <Button
        style={styles.button}
        onPress={() => openScreen('Text')}
        text="Text"
      />
    </ScrollView>
  );
}

const styles = ScaledSheet.create({
  button: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: '8@vs',
  },
});
