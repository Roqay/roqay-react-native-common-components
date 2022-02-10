# Roqay Common React Native Components

Common React Native components used by [Roqay](https://roqay.com) packed in library for usage in future projects.

## Installation

```sh
yarn add roqay-react-native-common-components
```

The package depends on some third party packages that needs to be installed on the project as well. To install them you can use the following commands:

```sh
yarn add react-native-paper react-native-safe-area-context
```

As the package depends on `react-native-paper`, your root component must be wrapped with `Provider` from `react-native-paper`.  
See [React Native Paper Getting Started](https://callstack.github.io/react-native-paper/getting-started.html) for more details about adding `react-native-paper` to your project.

As mentioned in [React Native Paper Getting Started](https://callstack.github.io/react-native-paper/getting-started.html), `react-native-paper` also depends on `react-native-vector-icons` so make sure to add it to your project as well.

### Using `.svg` props available in some components

If you intend using `.svg` images for components that support them then make sure to add [`react-native-vector-image`](https://github.com/oblador/react-native-vector-image) to your project and follow the [installation steps](https://github.com/oblador/react-native-vector-image#installation) as well.

### Using `ImagePlaceholder` component

If you intend using [`ImagePlaceholder`](docs/ImagePlaceholder.md) component then make sure to add [`react-native-fast-image`](https://github.com/DylanVann/react-native-fast-image), [`react-native-progress`](https://github.com/oblador/react-native-progress) and [`react-native-svg`](https://github.com/react-native-svg/react-native-svg) to your project.

### Using `ScrollView` component

If you intend using [`ScrollView`](docs/ScrollView.md) component then make sure to add [`react-native-keyboard-aware-scroll-view`](https://github.com/APSL/react-native-keyboard-aware-scroll-view) to your project.

## Example

Example is available in [example folder](example).
To run the example run the following commands:

```sh
cd example
yarn
yarn android
yarn ios
```

## Usage

Each component has its own usage part in the [documentation](docs).

## Components

- [AlertDialog](docs/AlertDialog.md)
- [Button](docs/Button.md)
- [Card](docs/Card.md)
- [Checkbox](docs/Checkbox.md)
- [Dialog](docs/Dialog.md)
- [FlatList](docs/FlatList.md)
- [IconButton](docs/IconButton.md)
- [ImagePlaceholder](docs/ImagePlaceholder.md)
- [LoadingDialog](docs/LoadingDialog.md)
- [RadioButton](docs/RadioButton.md)
- [ScrollView](docs/ScrollView.md)
- [SelectDialog](docs/SelectDialog.md)
- [Text](docs/Text.md)
- [TextInput](docs/TextInput.md)

## Types

- [FlatListItem](docs/FlatListItem.md)
- [SelectItem](docs/SelectItem.md)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
