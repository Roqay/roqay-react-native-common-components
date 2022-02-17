# TextInput

TextInput component that uses `TextInput` component from `react-native-paper` alongside `react-native-size-matters` for scalable text size. Also adding line height based on size to fix text cuts on iPad. Alongside adding custom input for select supporting both dropdown using `Menu` from `react-native-paper` and dialog using [`SelectDialog`](SelectDialog.md).

## Images

### Android

<p align="middle">
  <img src="/assets/images/text-input/android/text-input.png" width="30%" alt="Android Text">
</p>

### iOS

<p align="middle">
  <img src="/assets/images/text-input/ios/text-input.png" width="30%" alt="iOS Text">
</p>

## Usage

```js
import React from 'react';
import { View } from 'react-native';
import { TextInput, SelectItem } from 'roqay-react-native-common-components';

const MyComponent = () => {
  const [value, setValue] = React.useState('');

  const [dialogSelectedItems, setDialogSelectedItems] = React.useState<
    SelectItem[] | undefined
  >(undefined);

  const onChangeText = (text: string) => setValue(text);

  const onDialogItemsSelected = (selectedItems?: SelectItem[]) =>
    setDialogSelectedItems(selectedItems);

  const dialogItems = [
    {
      id: 1,
      key: 'dialog-item-1',
      dropdownTitle: 'Dialog Item 1',
    },
    {
      id: 2,
      key: 'dialog-item-2',
      dropdownTitle: 'Dialog Item 2',
    },
    {
      id: 3,
      key: 'dialog-item-3',
      dropdownTitle: 'Dialog Item 3',
    },
    {
      id: 4,
      key: 'dialog-item-4',
      dropdownTitle: 'Dialog Item 4',
    },
    {
      id: 5,
      key: 'dialog-item-5',
      dropdownTitle: 'Dialog Item 5',
    },
  ];

  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Text Input"
        label="Text Input"
      />
      <TextInput
        placeholder="Dialog Select Input"
        label="Dialog Select Input"
        selectProps={{
          items: dialogItems,
          selectedItems: dialogSelectedItems,
          onItemsSelected: onDialogItemsSelected,
        }}
      />
    </View>
  );
};
```

## Props

### isRequired

Type: `boolean`  
Default value: `false`  
If `true` then label and placeholder will have a trailing `*` to indicate field is required.

### topLabelProps

Type: `TopLabelProps`  
Props for top label. If `label` prop inside `topLabelProps` is available then `label` prop from `topLabelProps` will be on top of `TextInput` and the `label` prop from `TextInputProps` will be ignored.

#### TopLabelProps.label

Type: `string`  
The label text to be displayed on top of `TextInput`.

#### TopLabelProps.textProps

Type: [`TextProps`](Text.md#props)  
The text props for the top label text.

### errorProps

Type: `ErrorProps`  
Props for error. If `errorMessage` prop inside `errorProps` is available then `TextInput` will be styles with error style from `react-native-paper` and an `errorMessage` prop from `errorProps` will be displayed below the `TextInput`.

#### ErrorProps.errorMessage

Type: `string`  
The error message to be displayed below `TextInput`.

#### ErrorProps.textProps

Type: [`TextProps`](Text.md#props)  
The text props for the error message.

### selectProps

Type: `SelectProps`  
Props for select input mode. If available then `TextInput` will enable selection mode based on `SelectProps` passed.

#### SelectProps.mode

Type: `'dialog' | 'dropdown'`  
Default value: `'dialog'`

- `'dialog'` - Use [`SelectDialog`](SelectDialog.md) for selection.
- `'dropdown'` - Use `Menu` from `react-native-paper` for selection.

#### SelectProps.items

Type: `Array<SelectItem>`  
An `Array` of type [`SelectItem`](SelectItem.md) to be displayed for the user.

#### SelectProps.selectedItems

Type: `Array<SelectItem>`  
An `Array` of type [`SelectItem`](SelectItem.md) to be marked as selected for the user.

#### SelectProps.allowMultiSelect

Type: `boolean`  
Default value: `false`  
Determines whether multi select mode is enabled or not.

#### SelectProps.onItemsSelected

Type: `(selectedItems: Array<SelectItem>) => void`  
Callback that is called when the user press an item in the select dialog or dropdown menu.

#### SelectProps.searchLabel

Type: `string`  
Default value: `'Look for'`  
The label text to display for the search input in case of dialog mode.

#### SelectProps.noDataMessage

Type: `string`  
Default value: `'No data available'`  
The text to display when no data available that match the search in case of dialog mode.

#### SelectProps.closeText

Type: `string`  
Default value: `'Close'`  
The text to display for the close button in case of dialog mode.
