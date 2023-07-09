import React from 'react';
import {ScrollView, Card, Text} from 'roqay-react-native-common-components';
import {ScaledSheet, vs} from 'react-native-size-matters';

export default function CardScreen() {
  return (
    <ScrollView>
      <Card style={styles.card}>
        <Text>Default card</Text>
      </Card>
      <Card style={styles.card} mode="contained">
        <Text>Contained card</Text>
      </Card>
    </ScrollView>
  );
}

const styles = ScaledSheet.create({
  card: {
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: vs(8),
  },
});
