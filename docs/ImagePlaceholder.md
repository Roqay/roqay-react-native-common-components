# ImagePlaceholder

Image component that used to display remote image with placeholder that displays while loading and in case of error as well as displaying progress while loading image. Also with caching and priority for loading images.

## Images

### Android

<p align="middle">
  <img src="/assets/images/android-image-placeholder.png" width="30%" alt="Android ImagePlaceholder">
</p>

### iOS

<p align="middle">
  <img src="/assets/images/ios-image-placeholder.png" width="30%" alt="iOS ImagePlaceholder">
</p>

## Extra Installation

To use the component, you need to add [`react-native-fast-image](https://github.com/DylanVann/react-native-fast-image), [`react-native-progress`](https://github.com/oblador/react-native-progress) and [`react-native-svg`](https://github.com/react-native-svg/react-native-svg) to your project.

## Usage

```js
import React from 'react';
import { View } from 'react-native';
import { ImagePlaceholder } from 'eslam-elmeniawy-components';

const MyComponent = () => {
  return (
    <View>
      <ImagePlaceholder
        size={100}
        source="https://unsplash.it/500"
        placeholder={require('./placeholder.png')}
      />
    </View>
  );
};
```

## Props

### size

Type: `number`  
Determines the size of the image to be used as `width` and `height`. If not added then `width` and `height` are taken from the `style` prop.

### source

Type: `string`  
The image URL to load.

### placeholder

Type: `number` - opaque type returned by something like `require('./image.jpg')`  
The image to display while loading and in case of error.

### resizeMode

Type: `'cover' | 'contain' | 'stretch' | 'center'`  
Default value: `'cover'`

- `cover` - Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding).
- `contain` - Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).
- `stretch` - Scale width and height independently, This may change the aspect ratio of the src.
- `center` - Do not scale the image, keep centered.

### priority

Type: `'low' | 'normal' | 'high'`  
Default value: `'normal'`  
Priority for loading the image.

### cache

Type: `'low' | 'normal' | 'high'`  
Default value: `'normal'`  
Priority for loading the image.

### color

Type: `string`  
Custom color for icon.  
If not passed a default value from `react-native-paper` default theme is used equivalent to `DefaultTheme.colors.primary`.

### onPress

Type: `() => void`  
Callback that is called when the user press the icon button.

### disabled

Type: `boolean`  
Default value: `false`  
Determines whether icon button is disabled.

### iconPercent

Type: `number`  
Default value: `60`  
Determines the image size as percent from the `size` prop.

### [...View props](https://reactnative.dev/docs/view#props)
