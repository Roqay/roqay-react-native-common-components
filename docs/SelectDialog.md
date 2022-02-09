# SelectDialog

Dialog with custom style to be used for displaying and selecting items with support for filtering items and both single and multi selection mode.

## Images

### Android

<p align="middle">
  <img src="/assets/images/android-select-dialog-not-selected.png" width="30%" alt="Android SelectDialog not selected">
  <img src="/assets/images/android-select-dialog-selected.png" width="30%" alt="Android SelectDialog selected">
  <img src="/assets/images/android-select-dialog-search.png" width="30%" alt="Android SelectDialog search">
</p>

### iOS

<p align="middle">
  <img src="/assets/images/ios-select-dialog-not-selected.png" width="30%" alt="iOS SelectDialog not selected">
  <img src="/assets/images/ios-select-dialog-selected.png" width="30%" alt="iOS SelectDialog selected">
  <img src="/assets/images/ios-select-dialog-search.png" width="30%" alt="iOS SelectDialog search">
</p>

## `.svg` support

If you intend using `.svg` images for component then make sure to add [`react-native-vector-image`](https://github.com/oblador/react-native-vector-image) to your project and follow the [installation steps](https://github.com/oblador/react-native-vector-image#installation) as well.

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
