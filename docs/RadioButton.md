# RadioButton

RadioButton component that uses `RadioButton` component from `react-native-paper` alongside `Text` component to render radio button with text with the same style on both Android and iOS.

## Images

### Android

<p align="middle">
  <img src="/assets/images/radio-button/android/radio-button.png" width="30%" alt="Android RadioButton">
</p>

### iOS

<p align="middle">
  <img src="/assets/images/radio-button/ios/radio-button.png" width="30%" alt="iOS RadioButton">
</p>

## Usage

```js
import React from 'react';
import { View } from 'react-native';
import { RadioButton } from 'roqay-react-native-common-components';

const MyComponent = () => {
  const [checked, setChecked] = React.useState(false);

  const onPress = () => setChecked(!checked);

  return (
    <View>
      <RadioButton text="Click Me" checked={checked} onPress={onPress} />
    </View>
  );
};
```

## Props

### text

Type: `string`  
The text to display beside the radio button.

### checked

Type: `boolean`  
Default value: `false`  
Determines whether the radio button is checked.

### onPress

Type: `() => void`  
Callback that is called when the user press the radio button.

### disabled

Type: `boolean`  
Default value: `false`  
Determines whether radio button is disabled.

### checkedColor

Type: `string`  
Custom color for checked radio button.  
If not passed a default value from `react-native-paper` theme is used equivalent to `theme.colors.primary`.

### uncheckedColor

Type: `string`  
Custom color for unchecked radio button.

### textProps

Type: [Text props](Text.md#props)  
The props to add to the `Text` component used to render radio button text.

### [...View props](https://reactnative.dev/docs/view#props)
