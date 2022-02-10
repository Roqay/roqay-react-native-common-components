import React from 'react';
import {
  ScrollView,
  Text,
  isIPhoneX,
  isIPhoneXMax,
  isIPhone12,
  isIPhone12Max,
  isIPhoneWithMonobrow,
  getStatusBarHeight,
  configureLog,
} from 'roqay-react-native-common-components';
import { ScaledSheet } from 'react-native-size-matters';

export default function UtilsScreen() {
  React.useEffect(() => {
    configureLog({
      appName: 'roqay-react-native-common-components',
      firebaseLogLevels: ['INFO', 'LOG', 'WARN', 'ERROR'],
      isLocalLogEnable: true,
    });
  });

  return (
    <ScrollView>
      <Text style={styles.text}>{`isIPhoneX: ${isIPhoneX()}`}</Text>
      <Text style={styles.text}>{`isIPhoneXMax: ${isIPhoneXMax()}`}</Text>
      <Text style={styles.text}>{`isIPhone12: ${isIPhone12()}`}</Text>
      <Text style={styles.text}>{`isIPhone12Max: ${isIPhone12Max()}`}</Text>
      <Text
        style={styles.text}
      >{`isIPhoneWithMonobrow: ${isIPhoneWithMonobrow()}`}</Text>
      <Text
        style={styles.text}
      >{`getStatusBarHeight: ${getStatusBarHeight()}`}</Text>
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
