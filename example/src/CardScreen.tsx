import React from 'react';
import {ScrollView, Card, Text} from 'roqay-react-native-common-components';
import {ScaledSheet} from 'react-native-size-matters';

export default function CardScreen() {
  return (
    <ScrollView>
      <Card style={styles.card}>
        <Text>Default card</Text>
      </Card>
      <Card style={styles.card} mode="outlined">
        <Text>Outlined card</Text>
      </Card>
    </ScrollView>
  );
}

const styles = ScaledSheet.create({
  card: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: '8@vs',
  },
});
