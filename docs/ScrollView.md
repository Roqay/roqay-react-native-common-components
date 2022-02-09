# ScrollView

## Extra Installation

To use the component, you need to add [`react-native-keyboard-aware-scroll-view`](https://github.com/APSL/react-native-keyboard-aware-scroll-view) to your project.

## Props

### refreshing

Type: `boolean`  
Default value: `false`  
Set this `true` while waiting for new data from a refresh.

### onRefresh

Type: `() => void`  
If provided, a standard `RefreshControl` will be added for "Pull to Refresh" functionality. Make sure to also set the `refreshing` prop correctly.

### refreshColor

Type: `string`  
The `RefreshControl` color for "Pull to Refresh" functionality.  
If not passed a default value from `react-native-paper` theme is used equivalent to `theme.colors.primary`.  
This prop is ignored when `refreshControl` prop is available.

### [...KeyboardAwareScrollView props](https://github.com/APSL/react-native-keyboard-aware-scroll-view#props)
