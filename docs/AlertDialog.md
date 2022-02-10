# AlertDialog

Customized [`Dialog`](Dialog.md) component that contains title, message and actions.

## Images

### Android

<p align="middle">
  <img src="/assets/images/alert-dialog/android/single-action.png" width="30%" alt="Android Single Action AlertDialog">
  <img src="/assets/images/alert-dialog/android/two-actions.png" width="30%" alt="Android Two Actions AlertDialog">
  <img src="/assets/images/alert-dialog/android/three-actions.png" width="30%" alt="Android Three Actions AlertDialog">
</p>

### iOS

<p align="middle">
 <img src="/assets/images/alert-dialog/ios/single-action.png" width="30%" alt="iOS Single Action AlertDialog">
  <img src="/assets/images/alert-dialog/ios/two-actions.png" width="30%" alt="iOS Two Actions AlertDialog">
  <img src="/assets/images/alert-dialog/ios/three-actions.png" width="30%" alt="iOS Three Actions AlertDialog">
</p>

## Usage

```js
import React from 'react';
import { View } from 'react-native';
import { Button, AlertDialog } from 'roqay-react-native-common-components';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <View>
      <Button text="Show Alert Dialog" onPress={showDialog} />
      <AlertDialog
        title="Alert Dialog"
        message="Alert Dialog"
        dialogProps={{ visible: visible, onDismiss: hideDialog }}
        actions={[{ action: 'OK', actionProps: { onPress: hideDialog } }]}
      />
    </View>
  );
};
```

## Props

### dialogProps

Type: [Dialog props](Dialog.md#props)  
The props to add to the `Dialog` component used.

### title

Type: `string`  
The title text to display in the dialog.

### titleProps

Type: [Text props](Text.md#props)  
The props to add to the `Text` component used to render title text.

### message

Type: `string`  
The message text to display in the dialog.

### messageProps

Type: [Text props](Text.md#props)  
The props to add to the `Text` component used to render message text.

### actions

Type: `Array<Action>`  
An `Array` of type `Action` to be displayed for the user as action buttons in the dialog.

#### Action.action

Type: `string`  
The text to display in the action button.

#### Action.actionProps

Type: [Button props](Button.md#props)  
The props to add to the `Button` component used to render action.
