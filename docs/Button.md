# Button

Button component that renders a button with icon and supports normal images, `.svg` images using [`react-native-vector-image`](https://github.com/oblador/react-native-vector-image) and [`MaterialCommunityIcons`](https://materialdesignicons.com) using [`react-native-vector-icons`](https://github.com/oblador/react-native-vector-icons) for icons.

## Images

### Android

<p align="middle">
  <img src="/assets/images/android-button.png" width="30%" alt="Android Button">
</p>

### iOS

<p align="middle">
  <img src="/assets/images/ios-button.png" width="30%" alt="iOS Button">
</p>

## `.svg` support

If you intend using `.svg` images for component then make sure to add [`react-native-vector-image`](https://github.com/oblador/react-native-vector-image) to your project and follow the [installation steps](https://github.com/oblador/react-native-vector-image#installation) as well.

## Usage

```js
import React from 'react';
import { View } from 'react-native';
import { Button } from 'eslam-elmeniawy-components';

const MyComponent = () => {
  return (
    <View>
      <Button text="Simple Button" />
      <Button
        startImage={require('./information.png')}
        text="Button With Image"
      />
      <Button
        startVector={require('./information.svg')}
        text="Button With Vector"
      />
      <Button startIconName="information" text="Button With Icon" />
    </View>
  );
};
```

## Props

### text

Type: `string`  
The text to display in the button.

### startImage

Type: `number` - opaque type returned by something like `require('./image.jpg')`  
The image to display before text. Used for any [supported image formats](https://reactnative.dev/docs/image#source) by React Native.

### startVector

Type: `number` - opaque type returned by something like `require('./image.svg')`  
The image to display before text. Used for `.svg` images.

### startIconName

Type: `string` - one of the names available in [`MaterialCommunityIcons`](https://materialdesignicons.com)  
The image to display before text. Used for [`MaterialCommunityIcons`](https://materialdesignicons.com).

### endImage

Type: `number` - opaque type returned by something like `require('./image.jpg')`  
The image to display after text. Used for any [supported image formats](https://reactnative.dev/docs/image#source) by React Native.

### endVector

Type: `number` - opaque type returned by something like `require('./image.svg')`  
The image to display after text. Used for `.svg` images.

### endIconName

Type: `string` - one of the names available in [`MaterialCommunityIcons`](https://materialdesignicons.com)  
The image to display after text. Used for [`MaterialCommunityIcons`](https://materialdesignicons.com).

### onPress

Type: `() => void`  
Callback that is called when the user press the button.

### disabled

Type: `boolean`  
Default value: `false`  
Determines whether icon button is disabled.

### iconSize

Type: `number`  
Default value: `24`  
Determines the icon size.

### noIconTint

Type: `boolean`  
Default value: `false`  
If `true` then the text color will not be applied as tint and no tint will be added to the icon.

### textProps

Type: [Text props](Text.md#props)  
The props to add to the `Text` component used to render button text.

### [...View props](https://reactnative.dev/docs/view#props)
