# Status Bar Utils

Some helpers for `StatusBar`.

## Usage

```js
import React from 'react';
import { View } from 'react-native';
import {
  Text,
  isIPhoneX,
  isIPhoneXMax,
  isIPhone12,
  isIPhone12Max,
  isIPhoneWithMonobrow,
  getStatusBarHeight,
} from 'roqay-react-native-common-components';

const MyComponent = () => {
  return (
    <View>
      <Text>{`isIPhoneX: ${isIPhoneX()}`}</Text>
      <Text>{`isIPhoneXMax: ${isIPhoneXMax()}`}</Text>
      <Text>{`isIPhone12: ${isIPhone12()}`}</Text>
      <Text>{`isIPhone12Max: ${isIPhone12Max()}`}</Text>
      <Text>{`isIPhoneWithMonobrow: ${isIPhoneWithMonobrow()}`}</Text>
      <Text>{`StatusBarHeight: ${getStatusBarHeight()}`}</Text>
    </View>
  );
};
```

## Content

### isIPhoneX

Type: `() => boolean`

### isIPhoneXMax

Type: `() => boolean`

### isIPhone12

Type: `() => boolean`

### isIPhone12Max

Type: `() => boolean`

### isIPhoneWithMonobrow

Type: `() => boolean`

### getStatusBarHeight

Type: `(skipAndroid?: boolean) => number`
