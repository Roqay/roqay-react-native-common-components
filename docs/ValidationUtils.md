# Validation Utils

Collection of regular expressions used for validation.

## Usage

```js
import React from 'react';
import { View } from 'react-native';
import {
  Text,
  nameRegExp,
  fullNameRegExp,
  emailRegExp,
  kuwaitPhoneRegExp,
  strictPasswordRegExp,
} from 'roqay-react-native-common-components';

const MyComponent = () => {
  return (
    <View>
      {/* Name validation */}
      <Text>{`"Eslam" is valid name: ${nameRegExp.test('Eslam')}.`}</Text>

      {/* Full name validation */}
      <Text>{`"Eslam ElMeniawy" is valid full name: ${fullNameRegExp.test(
        'Eslam ElMeniawy'
      )}.`}</Text>

      {/* Email validation */}
      <Text>{`"eslam@email.com" is valid email: ${emailRegExp.test(
        'eslam@email.com'
      )}.`}</Text>

      {/* Kuwait phone validation */}
      <Text>{`"+96550000000" is valid Kuwait phone: ${kuwaitPhoneRegExp.test(
        '+96550000000'
      )}.`}</Text>

      {/* Strict password validation */}
      <Text>{`"Xx12345#" is valid strict password: ${strictPasswordRegExp.test(
        'Xx12345#'
      )}.`}</Text>
    </View>
  );
};
```

## Content

### nameRegExp

Type: `RegExp`  
Matches characters only.

### fullNameRegExp

Type: `RegExp`  
Matches case insensitive first name, optional unlimited number of middle names and last name separated with space format.

### emailRegExp

Type: `RegExp`  
Matches email addresses.

### kuwaitPhoneRegExp

Type: `RegExp`  
Matches Kuwait phone numbers with following rules:

- First four characters must be +965 (Optional).
- Fifth character either "5", "6" or "9".
- Followed by any 7 numbers (0-9).

### strictPasswordRegExp

Type: `RegExp`  
Matches strict passwords with following rules:

- Minimum 8 characters.
- Maximum 50 characters.
- No spaces allowed.
- Contains at least 1 uppercase letter.
- Contains at least 1 lowercase letter.
- Contains at least 1 number (0-9).
- Contains at least 1 non-alpha numeric number.
