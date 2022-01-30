# Eslam El-Meniawy Components

Common React Native components used by [Eslam El-Meniawy](https://eslamelmeniawy.github.io) packed in library for usage in future projects.

## Installation

```sh
yarn add eslam-elmeniawy-components
```

The package depends on some third party packages that needs to be installed on the project as well. To install them you can use the following commands:

```sh
yarn add react-native-paper react-native-safe-area-context
```

As the package depends on `react-native-paper`, your root component must be wrapped with `Provider` from `react-native-paper`.  
See [React Native Paper Getting Started](https://callstack.github.io/react-native-paper/getting-started.html) for more details about adding `react-native-paper` to your project.

As mentioned in [React Native Paper Getting Started](https://callstack.github.io/react-native-paper/getting-started.html), `react-native-paper` also depends on `react-native-vector-icons` so make sure to add it to your project as well.

If you intend using `.svg` images for components then make sure to add [`react-native-vector-image`](https://github.com/oblador/react-native-vector-image) to your project and follow the [installation steps](https://github.com/oblador/react-native-vector-image#installation) as well.

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

- [Checkbox](docs/Checkbox.md)
- [Dialog](docs/Dialog.md)
- [Text](docs/Text.md)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
