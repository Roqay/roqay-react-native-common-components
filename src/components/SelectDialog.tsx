// External imports.
import React from 'react';
import { withTheme } from 'react-native-paper';
import { View, I18nManager } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

// Types imports.
import type SelectItem from '../types/SelectItem';
import type { MD2Theme, MD3Theme } from 'react-native-paper';

// Internal imports.
import Dialog from './Dialog';
import DefaultInput from './TextInput/DefaultInput';
import Text from './Text';
import FlatList from './FlatList';
import Checkbox from './Checkbox';
import Button from './Button';

// #region Styles
const styles = ScaledSheet.create({
  dialog: {
    width: '90%',
    height: '90%',
    borderRadius: 0,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 0,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    width: '100%',
    borderRadius: '10@msr',
    overflow: 'hidden',
    padding: '16@msr',
  },
  noDataText: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: '16@msr',
  },
  list: {
    marginTop: '8@msr',
  },
  selectItem: {
    marginVertical: '4@msr',
  },
  closeButton: {
    width: '100%',
    marginTop: '16@msr',
    borderRadius: '10@msr',
  },
});
// #endregion

// #region Types
export interface Props {
  items?: SelectItem[];
  selectedItems?: SelectItem[];
  allowMultiSelect?: boolean;
  onItemsSelected?: (selectedItems?: SelectItem[]) => void;
  visible?: boolean;
  onDismiss?: () => void;
  searchLabel?: string;
  noDataMessage?: string;
  closeText?: string;
}

interface PropsWithTheme extends Props {
  theme: MD2Theme | MD3Theme;
}

interface State {
  selectedItems?: SelectItem[];
  searchText?: string;
}
// #endregion

class SelectDialog extends React.PureComponent<PropsWithTheme, State> {
  // Variable for mount state.
  isComponentMounted: boolean = false;

  constructor(props: PropsWithTheme) {
    super(props);

    this.state = {
      selectedItems: props.selectedItems,
      searchText: undefined,
    };
  }

  // #region Lifecycle
  static getDerivedStateFromProps(props: Props, state: State): State {
    return {
      ...state,
      selectedItems: props.selectedItems,
    };
  }

  componentDidMount() {
    // Set is mounted.
    this.isComponentMounted = true;
  }

  componentWillUnmount() {
    // Clear is mounted.
    this.isComponentMounted = false;
  }
  // #endregion

  // #region Text change events
  _onChangeTextSearchText = (text: string): void => {
    this.setState({ searchText: text });
  };
  // #endregion

  // #region Press events
  _onItemPressed = (item: SelectItem): void => {
    const { selectedItems } = this.state;
    const { allowMultiSelect, onItemsSelected } = this.props;
    let newSelectedItems: SelectItem[] = Array.from(selectedItems || []);
    let index = -1;

    newSelectedItems.some((dataItem, i) => {
      if (dataItem && dataItem.key === item.key) {
        index = i;
        return true;
      }

      return false;
    });

    if (index > -1) {
      newSelectedItems.splice(index, 1);
    } else if (allowMultiSelect) {
      newSelectedItems.push(item);
    } else {
      newSelectedItems = [item];
    }

    this.setState({ selectedItems: newSelectedItems }, () => {
      if (onItemsSelected) {
        onItemsSelected(newSelectedItems);
      }

      if (!allowMultiSelect) {
        this._dismissDialog();
      }
    });
  };
  // #endregion

  _dismissDialog = (): void => {
    const { onDismiss } = this.props;

    this.setState({ searchText: undefined }, () => {
      if (onDismiss) {
        onDismiss();
      }
    });
  };

  _getFilterList = (): SelectItem[] | undefined => {
    const { items } = this.props;
    const { searchText } = this.state;

    if (items && searchText) {
      const filteredItems = items.filter(
        (item) =>
          (item.dropdownTitle || '')
            .toLowerCase()
            .indexOf(searchText.toLowerCase()) > -1
      );

      return filteredItems;
    }

    return items;
  };

  _isItemSelected = (item: SelectItem): boolean => {
    const { selectedItems } = this.state;
    let itemSelected = false;

    selectedItems?.some((dataItem) => {
      if (dataItem && dataItem.key === item.key) {
        itemSelected = true;
        return true;
      }

      return false;
    });

    return itemSelected;
  };

  _getSearchInput = (): React.ReactElement => {
    const { searchLabel, theme } = this.props;

    const isArabic =
      (I18nManager.getConstants().localeIdentifier?.indexOf('ar') || -1) > -1;

    return (
      <DefaultInput
        mode="outlined"
        label={
          searchLabel === undefined
            ? isArabic
              ? 'ابحث عن'
              : 'Look for'
            : searchLabel
        }
        onChangeText={this._onChangeTextSearchText}
        style={{ backgroundColor: theme.colors.surface }}
      />
    );
  };

  _getContent = (): React.ReactElement => {
    const { noDataMessage } = this.props;
    const items = this._getFilterList();

    if (items && items.length) {
      return (
        <FlatList
          data={items}
          renderItem={({ item }) => this._getListItem(item)}
          bounces={false}
          style={styles.list}
        />
      );
    }

    const isArabic =
      (I18nManager.getConstants().localeIdentifier?.indexOf('ar') || -1) > -1;

    return (
      <Text style={styles.noDataText} size={15}>
        {noDataMessage === undefined
          ? isArabic
            ? 'لا تتوافر بيانات!'
            : 'No data available'
          : noDataMessage}
      </Text>
    );
  };

  _getListItem = (item: SelectItem): React.ReactElement => {
    const { theme } = this.props;

    return (
      <Checkbox
        style={styles.selectItem}
        onPress={() => this._onItemPressed(item)}
        checked={this._isItemSelected(item)}
        checkedColor={theme.colors.primary}
        uncheckedColor={theme.colors.onSurface}
        text={item.dropdownTitle}
        textProps={{
          style: { color: theme.colors.onSurface },
        }}
      />
    );
  };

  render(): React.ReactElement {
    const { visible, closeText, theme } = this.props;

    const isArabic =
      (I18nManager.getConstants().localeIdentifier?.indexOf('ar') || -1) > -1;

    return (
      <Dialog
        visible={visible}
        onDismiss={this._dismissDialog}
        style={styles.dialog}
      >
        <>
          <View
            style={[
              styles.container,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            {this._getSearchInput()}
            {this._getContent()}
          </View>
          <Button
            text={
              closeText === undefined ? (isArabic ? 'تم' : 'Done') : closeText
            }
            onPress={this._dismissDialog}
            style={[
              styles.closeButton,
              { backgroundColor: theme.colors.surface },
            ]}
            textProps={{
              style: { color: theme.colors.onSurface },
            }}
          />
        </>
      </Dialog>
    );
  }
}

export default withTheme(SelectDialog);
