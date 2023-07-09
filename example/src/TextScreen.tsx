import React from 'react';
import {ScrollView, Text} from 'roqay-react-native-common-components';
import {ScaledSheet, vs} from 'react-native-size-matters';
import {Divider} from 'react-native-paper';

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
      <Divider />
      <Text style={styles.text} variant="displayLarge">
        Display Large
      </Text>
      <Text style={styles.text} variant="displayLarge">
        Display Large
      </Text>
      <Text style={styles.text} variant="displayMedium">
        Display Medium
      </Text>
      <Text style={styles.text} variant="displaySmall">
        Display small
      </Text>
      <Text style={styles.text} variant="headlineLarge">
        Headline Large
      </Text>
      <Text style={styles.text} variant="headlineMedium">
        Headline Medium
      </Text>
      <Text style={styles.text} variant="headlineSmall">
        Headline Small
      </Text>
      <Text style={styles.text} variant="titleLarge">
        Title Large
      </Text>
      <Text style={styles.text} variant="titleMedium">
        Title Medium
      </Text>
      <Text style={styles.text} variant="titleSmall">
        Title Small
      </Text>
      <Text style={styles.text} variant="bodyLarge">
        Body Large
      </Text>
      <Text style={styles.text} variant="bodyMedium">
        Body Medium
      </Text>
      <Text style={styles.text} variant="bodySmall">
        Body Small
      </Text>
      <Text style={styles.text} variant="labelLarge">
        Label Large
      </Text>
      <Text style={styles.text} variant="labelMedium">
        Label Medium
      </Text>
      <Text style={styles.text} variant="labelSmall">
        Label Small
      </Text>
    </ScrollView>
  );
}

const styles = ScaledSheet.create({
  text: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: vs(8),
  },
});
