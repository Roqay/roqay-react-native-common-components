# String Utils

Some helpers for `String`.

## Usage

```js
import React from 'react';
import { View } from 'react-native';
import { Text, trimStringToLength } from 'roqay-react-native-common-components';

const MyComponent = () => {
  const longString =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  return (
    <View>
      <Text>{trimStringToLength(longString, 100)}</Text>
      <Text>{trimStringToLength(longString)}</Text>
    </View>
  );
};
```

## Content

### trimStringToLength

Type: `(string: string, length?: number) => string`  
If `length` not passed a default value is used equivalent to `45`.
