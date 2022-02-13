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
  Button,
} from 'roqay-react-native-common-components';
import { ScaledSheet } from 'react-native-size-matters';
import crashlytics from '@react-native-firebase/crashlytics';

export default function UtilsScreen() {
  const _onLogMessagePress = () => {
    console.log('Log message');
  };

  const _onLogErrorPress = () => {
    console.error('Log error');
    crashlytics().crash();
  };

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
      <Button
        text="Add Log Message"
        onPress={_onLogMessagePress}
        style={styles.button}
      />
      <Button
        text="Add Log Error"
        onPress={_onLogErrorPress}
        style={styles.button}
      />
    </ScrollView>
  );
}

const styles = ScaledSheet.create({
  text: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: '8@vs',
  },
  button: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: '8@vs',
  },
});
