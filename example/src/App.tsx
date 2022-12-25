import React from 'react';
import {enableScreens} from 'react-native-screens';
import {Provider, DefaultTheme} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {configureLog} from 'roqay-react-native-common-components';

import HomeScreen from './HomeScreen';
import AlertDialogScreen from './AlertDialogScreen';
import ButtonScreen from './ButtonScreen';
import CardScreen from './CardScreen';
import CheckboxScreen from './CheckboxScreen';
import DialogScreen from './DialogScreen';
import IconButtonScreen from './IconButtonScreen';
import ImagePlaceholderScreen from './ImagePlaceholderScreen';
import LoadingDialogScreen from './LoadingDialogScreen';
import RadioButtonScreen from './RadioButtonScreen';
import SelectDialogScreen from './SelectDialogScreen';
import TextInputScreen from './TextInputScreen';
import TextScreen from './TextScreen';
import UtilsScreen from './UtilsScreen';

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  React.useEffect(() => {
    configureLog({
      appName: 'roqay-react-native-common-components',
      firebaseLogLevels: ['INFO', 'LOG', 'WARN', 'ERROR'],
      isLocalLogEnable: true,
    });
  });

  return (
    <Provider theme={DefaultTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AlertDialog" component={AlertDialogScreen} />
          <Stack.Screen name="Button" component={ButtonScreen} />
          <Stack.Screen name="Card" component={CardScreen} />
          <Stack.Screen name="Checkbox" component={CheckboxScreen} />
          <Stack.Screen name="Dialog" component={DialogScreen} />
          <Stack.Screen name="IconButton" component={IconButtonScreen} />
          <Stack.Screen
            name="ImagePlaceholder"
            component={ImagePlaceholderScreen}
          />
          <Stack.Screen name="LoadingDialog" component={LoadingDialogScreen} />
          <Stack.Screen name="RadioButton" component={RadioButtonScreen} />
          <Stack.Screen name="SelectDialog" component={SelectDialogScreen} />
          <Stack.Screen name="TextInput" component={TextInputScreen} />
          <Stack.Screen name="Text" component={TextScreen} />
          <Stack.Screen name="Utils" component={UtilsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
