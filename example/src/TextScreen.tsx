import React from 'react';
import { ScrollView, Text } from 'roqay-react-native-common-components';
import { ScaledSheet } from 'react-native-size-matters';

export default function TextScreen() {
  return (
    <ScrollView>
      <Text style={styles.text}>Normal Text</Text>
      <Text style={styles.text} type="bold">
        Bold Text
      </Text>
      <Text style={styles.text} type="caption">
        Caption Text
      </Text>
    </ScrollView>
  );
}

const styles = ScaledSheet.create({
  text: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: '8@vs',
  },
});
