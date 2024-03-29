import React from 'react';
import {
  ScrollView,
  Text,
  IconButton,
} from 'roqay-react-native-common-components';
import {ScaledSheet, vs} from 'react-native-size-matters';

export default function IconButtonScreen() {
  const _onPress = () => {};

  return (
    <ScrollView>
      <Text style={styles.text}>Image</Text>
      <IconButton
        style={styles.icon}
        image={require('./information.png')}
        onPress={_onPress}
      />
      <Text style={styles.text}>Vector</Text>
      <IconButton
        style={styles.icon}
        vector={require('./information.svg')}
        onPress={_onPress}
      />
      <Text style={styles.text}>Icon</Text>
      <IconButton
        style={styles.icon}
        iconName="information"
        onPress={_onPress}
      />
    </ScrollView>
  );
}

const styles = ScaledSheet.create({
  text: {
    marginTop: vs(8),
    alignSelf: 'center',
  },
  icon: {
    marginBottom: vs(8),
    alignSelf: 'center',
  },
});
