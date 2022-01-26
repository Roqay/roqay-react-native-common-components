import React from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider, DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import DialogScreen from './DialogScreen';

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider theme={DefaultTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Dialog" component={DialogScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
