import React from 'react';
import {
  ScrollView,
  SelectDialog,
  Text,
  Button,
  SelectItem,
} from 'roqay-react-native-common-components';
import {ScaledSheet, vs} from 'react-native-size-matters';

export default function SelectDialogScreen() {
  const [singleSelectDialogVisible, setSingleSelectDialogVisible] =
    React.useState(false);

  const [singleSelectDialogSelectedItems, setSingleSelectDialogSelectedItems] =
    React.useState<SelectItem[] | undefined>(undefined);

  const [multiSelectDialogVisible, setMultiSelectDialogVisible] =
    React.useState(false);

  const [multiSelectDialogSelectedItems, setMultiSelectDialogSelectedItems] =
    React.useState<SelectItem[] | undefined>(undefined);

  const _showSingleSelectDialog = () => setSingleSelectDialogVisible(true);

  const _hideSingleSelectDialog = () => setSingleSelectDialogVisible(false);

  const _onSingleSelectItemsSelected = (selectedItems?: SelectItem[]) =>
    setSingleSelectDialogSelectedItems(selectedItems);

  const _showMultiSelectDialog = () => setMultiSelectDialogVisible(true);

  const _hideMultiSelectDialog = () => setMultiSelectDialogVisible(false);

  const _onMultiSelectItemsSelected = (selectedItems?: SelectItem[]) =>
    setMultiSelectDialogSelectedItems(selectedItems);

  const singleSelectItems = [
    {
      id: 1,
      key: 'single-select-item-1',
      dropdownTitle: 'Single Select Item 1',
    },
    {
      id: 2,
      key: 'single-select-item-2',
      dropdownTitle: 'Single Select Item 2',
    },
    {
      id: 3,
      key: 'single-select-item-3',
      dropdownTitle: 'Single Select Item 3',
    },
    {
      id: 4,
      key: 'single-select-item-4',
      dropdownTitle: 'Single Select Item 4',
    },
    {
      id: 5,
      key: 'single-select-item-5',
      dropdownTitle: 'Single Select Item 5',
    },
  ];

  const multiSelectItems = [
    {
      id: 1,
      key: 'multi-select-item-1',
      dropdownTitle: 'Multi Select Item 1',
    },
    {
      id: 2,
      key: 'multi-select-item-2',
      dropdownTitle: 'Multi Select Item 2',
    },
    {
      id: 3,
      key: 'multi-select-item-3',
      dropdownTitle: 'Multi Select Item 3',
    },
    {
      id: 4,
      key: 'multi-select-item-4',
      dropdownTitle: 'Multi Select Item 4',
    },
    {
      id: 5,
      key: 'multi-select-item-5',
      dropdownTitle: 'Multi Select Item 5',
    },
  ];

  return (
    <>
      <ScrollView>
        <Button
          style={styles.button}
          onPress={_showSingleSelectDialog}
          text="Show Single Select Dialog"
        />
        <Text style={styles.text}>
          {singleSelectDialogSelectedItems
            ?.map(item => item.dropdownTitle)
            ?.join(', ')}
        </Text>
        <Button
          style={styles.button}
          onPress={_showMultiSelectDialog}
          text="Show Multi Select Dialog"
        />
        <Text style={styles.text}>
          {multiSelectDialogSelectedItems
            ?.map(item => item.dropdownTitle)
            ?.join(', ')}
        </Text>
      </ScrollView>
      <SelectDialog
        visible={singleSelectDialogVisible}
        onDismiss={_hideSingleSelectDialog}
        items={singleSelectItems}
        selectedItems={singleSelectDialogSelectedItems}
        onItemsSelected={_onSingleSelectItemsSelected}
      />
      <SelectDialog
        allowMultiSelect
        visible={multiSelectDialogVisible}
        onDismiss={_hideMultiSelectDialog}
        items={multiSelectItems}
        selectedItems={multiSelectDialogSelectedItems}
        onItemsSelected={_onMultiSelectItemsSelected}
      />
    </>
  );
}

const styles = ScaledSheet.create({
  button: {
    width: '90%',
    alignSelf: 'center',
    marginTop: vs(8),
  },
  text: {
    width: '90%',
    alignSelf: 'center',
    marginTop: vs(2),
    marginBottom: vs(8),
  },
});
