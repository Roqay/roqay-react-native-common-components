# SelectDialog

Dialog with custom style to be used for displaying and selecting items with support for filtering items and both single and multi selection mode.

## Images

### Android

<p align="middle">
  <img src="/assets/images/select-dialog/android/not-selected.png" width="30%" alt="Android SelectDialog not selected">
  <img src="/assets/images/select-dialog/android/selected.png" width="30%" alt="Android SelectDialog selected">
  <img src="/assets/images/select-dialog/android/search.png" width="30%" alt="Android SelectDialog search">
</p>

### iOS

<p align="middle">
  <img src="/assets/images/select-dialog/ios/not-selected.png" width="30%" alt="iOS SelectDialog not selected">
  <img src="/assets/images/select-dialog/ios/selected.png" width="30%" alt="iOS SelectDialog selected">
  <img src="/assets/images/select-dialog/ios/search.png" width="30%" alt="iOS SelectDialog search">
</p>

## Usage

```js
import React from 'react';
import { View } from 'react-native';
import {
  SelectDialog,
  SelectItem,
  Button,
  Text,
} from 'roqay-react-native-common-components';

const MyComponent = () => {
  const [selectDialogVisible, setSelectDialogVisible] = React.useState(false);

  const [selectDialogSelectedItems, setSelectDialogSelectedItems] =
    React.useState<SelectItem[] | undefined>(undefined);

  const showSelectDialog = () => setSelectDialogVisible(true);

  const hideSelectDialog = () => setSelectDialogVisible(false);

  const onSelectItemsSelected = (selectedItems?: SelectItem[]) =>
    setSelectDialogSelectedItems(selectedItems);

  const selectItems = [
    {
      id: 1,
      key: 'select-item-1',
      dropdownTitle: 'Select Item 1',
    },
    {
      id: 2,
      key: 'select-item-2',
      dropdownTitle: 'Select Item 2',
    },
    {
      id: 3,
      key: 'select-item-3',
      dropdownTitle: 'Select Item 3',
    },
    {
      id: 4,
      key: 'select-item-4',
      dropdownTitle: 'Select Item 4',
    },
    {
      id: 5,
      key: 'select-item-5',
      dropdownTitle: 'Select Item 5',
    },
  ];

  return (
    <View>
      <Button
          onPress={showSelectDialog}
          text="Show Select Dialog"
        />
      <Text style={styles.text}>
          {selectDialogSelectedItems?.map(
            (item) => `${item.dropdownTitle} `
          )}
      </Text>
      <SelectDialog
        visible={selectDialogVisible}
        onDismiss={hideSelectDialog}
        items={selectItems}
        selectedItems={selectDialogSelectedItems}
        onItemsSelected={onSelectItemsSelected}
      />
    </View>
  );
};
```

## Props

### items

Type: `Array<SelectItem>`  
An `Array` of type [`SelectItem`](SelectItem.md) to be displayed for the user.

### selectedItems

Type: `Array<SelectItem>`  
An `Array` of type [`SelectItem`](SelectItem.md) to be marked as selected for the user.

### allowMultiSelect

Type: `boolean`  
Default value: `false`  
Determines whether multi select mode is enabled or not.

### onItemsSelected

Type: `(selectedItems: Array<SelectItem>) => void`  
Callback that is called when the user press an item in the dialog.

### visible

Type: `boolean`  
Default value: `false`  
Determines whether the dialog is visible.

### onDismiss

Type: `() => void`  
Callback that is called when the user dismisses the dialog.

### searchLabel

Type: `string`  
Default value: `'Look for'`  
The label text to display for the search input.

### noDataMessage

Type: `string`  
Default value: `'No data available'`  
The text to display when no data available that match the search.

### closeText

Type: `string`  
Default value: `'Close'`  
The text to display for the close button.
