# FlatList

Customized `FlatList` component which uses `React Native` `FlatList` component with custom default values for props that usually needs to be setup every time using `FlatList`.

## Props

### data (Required)

Type: `Array<FlatListItem>`  
An `Array` of type [`FlatListItem`](FlatListItem.md) to be displayed for the user.

### refreshColor

Type: `string`  
The `RefreshControl` color for "Pull to Refresh" functionality.  
If not passed a default value from `react-native-paper` theme is used equivalent to `theme.colors.primary`.  
This prop is ignored when `refreshControl` prop is available.

### [...FlatList props](https://reactnative.dev/docs/flatlist#props)
