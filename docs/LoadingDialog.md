# LoadingDialog

Customized [`Dialog`](Dialog.md) component that contains `ActivityIndicator` from `react-native-paper` and not dismissable.

## Images

### Android

<p align="middle">
  <img src="/assets/images/loading-dialog/android/loading-dialog.png" width="30%" alt="Android LoadingDialog">
</p>

### iOS

<p align="middle">
  <img src="/assets/images/loading-dialog/ios/loading-dialog.png" width="30%" alt="iOS LoadingDialog">
</p>

## Usage

```js
import React from 'react';
import { View } from 'react-native';
import {
  Button,
  LoadingDialog,
  Text,
} from 'roqay-react-native-common-components';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  return (
    <View>
      <Button text="Show Loading Dialog" onPress={showDialog} />
      <LoadingDialog visible={visible} />
    </View>
  );
};
```

## Props

### visible

Type: `boolean`  
Default value: `false`  
Determines whether the dialog is visible.
