# Text

Text component that uses `Text`, `Title` and `Caption` components from `react-native-paper` alongside `react-native-size-matters` for scalable text size. Also adding line height based on size to fix text cuts on iPad.

## Images

### Android

<p align="middle">
  <img src="/assets/images/android-text.png" width="30%" alt="Android Text">
</p>

### iOS

<p align="middle">
  <img src="/assets/images/ios-text.png" width="30%" alt="iOS Text">
</p>

## Usage

```js
import React from 'react';
import { View } from 'react-native';
import { Text } from 'roqay-react-native-common-components';

const MyComponent = () => {
  return (
    <View>
      <Text>Normal Text</Text>
      <Text type="bold">Bold Text</Text>
      <Text type="caption">Caption Text</Text>
    </View>
  );
};
```

## Props

### size

Type: `number`  
Default value: `11` for type `caption`, `13` for type `normal` and `15` for type `bold`  
Determines the font size of the text.

### type

Type: `'caption' | 'normal' | 'bold'`  
Default value: `'normal'`  
Determines the type of the text.

### [...Text props](https://reactnative.dev/docs/text#props)
