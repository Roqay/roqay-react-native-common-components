import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';

export default function HomeScreen({ navigation }: { navigation: any }) {
  const openScreen = (screenName: string) => navigation.navigate(screenName);

  return (
    <ScrollView>
      <Button style={styles.button} onPress={() => openScreen('Dialog')}>
        Dialog
      </Button>
    </ScrollView>
  );
}

const styles = ScaledSheet.create({
  button: {
    marginVertical: '8@vs',
  },
});
