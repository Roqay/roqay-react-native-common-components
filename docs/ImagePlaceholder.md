# ImagePlaceholder

Image component that used to display remote image with placeholder that displays while loading and in case of error as well as displaying progress while loading image. Also with caching and priority for loading images.

## Images

### Android

<p align="middle">
  <img src="/assets/images/image-placeholder/android/image-placeholder.png" width="30%" alt="Android ImagePlaceholder">
</p>

### iOS

<p align="middle">
  <img src="/assets/images/image-placeholder/ios/image-placeholder.png" width="30%" alt="iOS ImagePlaceholder">
</p>

## Extra Installation

To use the component, you need to add [`react-native-fast-image`](https://github.com/DylanVann/react-native-fast-image), [`react-native-progress`](https://github.com/oblador/react-native-progress) and [`react-native-svg`](https://github.com/react-native-svg/react-native-svg) to your project.

## Usage

```js
import React from 'react';
import { View } from 'react-native';
import { ImagePlaceholder } from 'roqay-react-native-common-components';

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

- `'cover'` - Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding).
- `'contain'` - Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).
- `'stretch'` - Scale width and height independently, This may change the aspect ratio of the src.
- `'center'` - Do not scale the image, keep centered.

### priority

Type: `'low' | 'normal' | 'high'`  
Default value: `'normal'`

- `'low'` - Low Priority.
- `'normal'` - Normal Priority.
- `'high'` - High Priority.

### cache

Type: `'immutable' | 'web' | 'cacheOnly'`  
Default value: `'immutable'`

- `'immutable'` - Only updates if url changes.
- `'web'` - Use headers and follow normal caching procedures.
- `'cacheOnly'` - Only show images from cache, do not make any network requests.

### loadingProps

Type: `Object`  
Props for loading indicator.

#### loadingProps.showLoading

Type: `boolean`  
Default value: `true`  
Whether to show loading indicator while the image is loading or not.

#### loadingProps.color

Type: `string`  
Custom color for loading indicator.  
If not passed a default value from `react-native-paper` theme is used equivalent to `theme.colors.surface`.

#### loadingProps.backgroundColor

Type: `string`  
Custom color for loading indicator background.  
If not passed a default value from `react-native-paper` theme is used equivalent to `theme.colors.onSurface` with alpha `40%`.

### [...View props](https://reactnative.dev/docs/view#props)
