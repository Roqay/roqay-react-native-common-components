import React from 'react';
import { ScrollView } from 'react-native';
import {
  SelectDialog,
  Text,
  Button,
  SelectItem,
} from 'roqay-react-native-common-components';
import { ScaledSheet } from 'react-native-size-matters';

export default function SelectDialogScreen() {
  const [singleSelectDialogVisible, setSingleSelectDialogVisible] =
    React.useState(false);

  const [singleSelectDialogSelectedItems, setSingleSelectDialogSelectedItems] =
    React.useState<Array<SelectItem> | undefined>(undefined);

  const [multiSelectDialogVisible, setMultiSelectDialogVisible] =
    React.useState(false);

  const [multiSelectDialogSelectedItems, setMultiSelectDialogSelectedItems] =
    React.useState<Array<SelectItem> | undefined>(undefined);

  const _showSingleSelectDialog = () => setSingleSelectDialogVisible(true);

  const _hideSingleSelectDialog = () => setSingleSelectDialogVisible(false);

  const _onSingleSelectItemsSelected = (selectedItems?: Array<SelectItem>) =>
    setSingleSelectDialogSelectedItems(selectedItems);

  const _showMultiSelectDialog = () => setMultiSelectDialogVisible(true);

  const _hideMultiSelectDialog = () => setMultiSelectDialogVisible(false);

  const _onMultiSelectItemsSelected = (selectedItems?: Array<SelectItem>) =>
    setMultiSelectDialogSelectedItems(selectedItems);

  return (
    <>
      <ScrollView>
        <Button
          style={styles.button}
          onPress={_showSingleSelectDialog}
          text="Show Single Select Dialog"
        />
        <Text style={styles.text}>
          {singleSelectDialogSelectedItems?.map(
            (item) => `${item.dropdownTitle}, `
          )}
        </Text>
        <Button
          style={styles.button}
          onPress={_showMultiSelectDialog}
          text="Show Multi Select Dialog"
        />
        <Text style={styles.text}>
          {multiSelectDialogSelectedItems?.map(
            (item) => `${item.dropdownTitle}, `
          )}
        </Text>
      </ScrollView>
      <SelectDialog
        visible={singleSelectDialogVisible}
        onDismiss={_hideSingleSelectDialog}
        items={[
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
        ]}
        selectedItems={singleSelectDialogSelectedItems}
        onItemsSelected={_onSingleSelectItemsSelected}
        searchLabel="Look for"
        noDataMessage="No Data Available"
        closeText="Close"
      />
      <SelectDialog
        allowMultiSelect
        visible={multiSelectDialogVisible}
        onDismiss={_hideMultiSelectDialog}
        items={[
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
        ]}
        selectedItems={multiSelectDialogSelectedItems}
        onItemsSelected={_onMultiSelectItemsSelected}
        searchLabel="Look for"
        noDataMessage="No Data Available"
        closeText="Close"
      />
    </>
  );
}

const styles = ScaledSheet.create({
  button: {
    width: '90%',
    alignSelf: 'center',
    marginTop: '8@vs',
  },
  text: {
    width: '90%',
    alignSelf: 'center',
    marginTop: '2@vs',
    marginBottom: '8@vs',
  },
});
