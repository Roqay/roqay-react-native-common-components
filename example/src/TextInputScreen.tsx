import React from 'react';
import { ScrollView } from 'react-native';
import { TextInput, SelectItem } from 'roqay-react-native-common-components';
import { ScaledSheet } from 'react-native-size-matters';

export default function TextInputScreen() {
  const [normalValue, setNormalValue] = React.useState('');
  const [multilineValue, setMultilineValue] = React.useState('');
  const [requiredValue, setRequiredValue] = React.useState('');
  const [outlinedValue, setOutlinedValue] = React.useState('');
  const [topLabelValue, setTopLabelValue] = React.useState('');

  const [dialogSelectedItems, setDialogSelectedItems] = React.useState<
    SelectItem[] | undefined
  >(undefined);

  const [dropdownSelectedItems, setDropdownSelectedItems] = React.useState<
    SelectItem[] | undefined
  >(undefined);

  const _onChangeTextNormal = (text: string) => setNormalValue(text);

  const _onChangeTextMultiline = (text: string) => setMultilineValue(text);

  const _onChangeTextRequired = (text: string) => setRequiredValue(text);

  const _onChangeTextOutlined = (text: string) => setOutlinedValue(text);

  const _onChangeTextTopLabel = (text: string) => setTopLabelValue(text);

  const _onDialogItemsSelected = (selectedItems?: SelectItem[]) =>
    setDialogSelectedItems(selectedItems);

  const _onDropdownItemsSelected = (selectedItems?: SelectItem[]) =>
    setDropdownSelectedItems(selectedItems);

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

  const dropdownItems = [
    {
      id: 1,
      key: 'dropdown-item-1',
      dropdownTitle: 'Dropdown Item 1',
    },
    {
      id: 2,
      key: 'dropdown-item-2',
      dropdownTitle: 'Dropdown Item 2',
    },
    {
      id: 3,
      key: 'dropdown-item-3',
      dropdownTitle: 'Dropdown Item 3',
    },
    {
      id: 4,
      key: 'dropdown-item-4',
      dropdownTitle: 'Dropdown Item 4',
    },
    {
      id: 5,
      key: 'dropdown-item-5',
      dropdownTitle: 'Dropdown Item 5',
    },
  ];

  return (
    <ScrollView>
      <TextInput
        style={styles.input}
        value={normalValue}
        onChangeText={_onChangeTextNormal}
        placeholder="Normal"
        label="Normal"
      />
      <TextInput
        style={styles.input}
        value={multilineValue}
        onChangeText={_onChangeTextMultiline}
        multiline
        placeholder="Multiline"
        label="Multiline"
      />
      <TextInput
        style={styles.input}
        value={requiredValue}
        onChangeText={_onChangeTextRequired}
        placeholder="Required"
        label="Required"
        isRequired
      />
      <TextInput
        mode="outlined"
        style={styles.input}
        value={outlinedValue}
        onChangeText={_onChangeTextOutlined}
        placeholder="Outlined"
        label="Outlined"
      />
      <TextInput
        style={styles.input}
        value={topLabelValue}
        onChangeText={_onChangeTextTopLabel}
        placeholder="Top Label"
        errorProps={{
          errorMessage: 'Error',
        }}
        topLabelProps={{
          label: 'Top Label',
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Dialog"
        label="Dialog"
        selectProps={{
          items: dialogItems,
          selectedItems: dialogSelectedItems,
          onItemsSelected: _onDialogItemsSelected,
          allowMultiSelect: true,
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Dropdown"
        label="Dropdown"
        selectProps={{
          mode: 'dropdown',
          items: dropdownItems,
          selectedItems: dropdownSelectedItems,
          onItemsSelected: _onDropdownItemsSelected,
          allowMultiSelect: true,
        }}
      />
    </ScrollView>
  );
}

const styles = ScaledSheet.create({
  input: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: '8@vs',
  },
});
