# Checkbox

Checkbox component that uses `Checkbox` component from `react-native-paper` alongside `Text` component to render checkbox with text with the same style on both Android and iOS.

## Images

### Android

<p align="middle">
  <img src="/assets/images/android-checkbox.png" width="30%" alt="Android Checkbox">
</p>

### iOS

<p align="middle">
  <img src="/assets/images/ios-checkbox.png" width="30%" alt="iOS Checkbox">
</p>

## Usage

```js
import React from 'react';
import { View } from 'react-native';
import { Checkbox } from 'roqay-react-native-common-components';

const MyComponent = () => {
  const [checked, setChecked] = React.useState(false);

  const onPress = () => setChecked(!checked);

  return (
    <View>
      <Checkbox text="Click Me" checked={checked} onPress={onPress} />
    </View>
  );
};
```

## Props

### text

Type: `string`  
The text to display beside the checkbox.

### checked

Type: `boolean`  
Default value: `false`  
Determines whether the checkbox is checked.

### onPress

Type: `() => void`  
Callback that is called when the user press the checkbox.

### disabled

Type: `boolean`  
Default value: `false`  
Determines whether checkbox is disabled.

### checkedColor

Type: `string`  
Custom color for checked checkbox.  
If not passed a default value from `react-native-paper` theme is used equivalent to `theme.colors.primary`.

### uncheckedColor

Type: `string`  
Custom color for unchecked checkbox.

### textProps

Type: [Text props](Text.md#props)  
The props to add to the `Text` component used to render checkbox text.

### [...View props](https://reactnative.dev/docs/view#props)
