# Card

Customized `Card` component which uses `react-native-paper` `Card` component with custom default values for props that usually needs to be setup every time using `Card`.

## Images

### Android

<p align="middle">
  <img src="/assets/images/card/android/card.png" width="30%" alt="Android Checkbox">
</p>

### iOS

<p align="middle">
  <img src="/assets/images/card/ios/card.png" width="30%" alt="iOS Checkbox">
</p>

## Usage

```js
import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'roqay-react-native-common-components';

const MyComponent = () => {
  return (
    <View>
      <Card>
        <Text>Card Content</Text>
      </Card>
    </View>
  );
};
```

## Props

### [...Card props](https://callstack.github.io/react-native-paper/card.html)
