// External imports.
import React from 'react';
import { withTheme } from 'react-native-paper';
import { View, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

// Types imports.
import type SelectItem from '../types/SelectItem';
import type { Theme } from 'react-native-paper/lib/typescript/types';

// Internal imports.
import Dialog from './Dialog';
import DefaultInput from './TextInput/DefaultInput';
import Text from './Text';
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
interface Props {
  items?: Array<SelectItem>;
  selectedItems?: Array<SelectItem>;
  allowMultiSelect?: boolean;
  onItemsSelected?: (selectedItems?: Array<SelectItem>) => void;
  visible?: boolean;
  onDismiss?: () => void;
  searchLabel?: string;
  noDataMessage?: string;
  closeText?: string;
  theme: Theme;
}

interface State {
  items?: Array<SelectItem>;
  selectedItems?: Array<SelectItem>;
  searchText: string;
}
// #endregion

class SelectDialog extends React.PureComponent<Props, State> {
  // Variable for mount state.
  isComponentMounted: boolean = false;

  constructor(props: Props) {
    super(props);

    this.state = {
      items: props.items,
      selectedItems: props.selectedItems,
      searchText: '',
    };
  }

  // #region Lifecycle
  static getDerivedStateFromProps(props: Props, state: State): State {
    const stateItems: Array<SelectItem> | undefined = state.items;
    const propsItems: Array<SelectItem> | undefined = props.items;
    let newItems: Array<SelectItem> | undefined;

    if (
      stateItems &&
      stateItems.length &&
      propsItems &&
      propsItems.length &&
      propsItems.length < stateItems.length
    ) {
      newItems = propsItems;
    } else if ((stateItems && stateItems.length) || state.searchText) {
      newItems = stateItems;
    } else {
      newItems = propsItems;
    }

    return {
      ...state,
      items: newItems,
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
    this.setState({ searchText: text }, () => {
      if (text) {
        this._filterList(text);
      } else {
        const { items } = this.props;
        this.setState({ items });
      }
    });
  };
  // #endregion

  // #region Press events
  _onItemPressed = (item: SelectItem): void => {
    const { selectedItems } = this.state;
    const { allowMultiSelect, onItemsSelected, onDismiss } = this.props;
    let newSelectedItems: Array<SelectItem> = Array.from(selectedItems || []);
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

      if (!allowMultiSelect && onDismiss) {
        onDismiss();
      }
    });
  };
  // #endregion

  _filterList = (text: string): void => {
    const { items } = this.props;

    if (items) {
      const filteredItems = items.filter(
        (item) =>
          (item.dropdownTitle || '').toLowerCase().indexOf(text.toLowerCase()) >
          -1
      );

      this.setState({ items: filteredItems });
    }
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
    const { searchText } = this.state;
    const { searchLabel, theme } = this.props;

    return (
      <DefaultInput
        mode="outlined"
        label={searchLabel}
        value={searchText}
        onChangeText={this._onChangeTextSearchText}
        style={{ backgroundColor: theme.colors.surface }}
        theme={theme}
      />
    );
  };

  _getContent = (): React.ReactElement => {
    const { items } = this.state;
    const { noDataMessage } = this.props;

    if (items && items.length) {
      return (
        <FlatList
          data={items}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => this._getListItem(item)}
          bounces={false}
          style={styles.list}
        />
      );
    }

    return (
      <Text style={styles.noDataText} size={15}>
        {noDataMessage}
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
        textProps={{ style: { color: theme.colors.onSurface }, theme }}
      />
    );
  };

  render(): React.ReactElement {
    const { visible, onDismiss, closeText, theme } = this.props;

    return (
      <Dialog visible={visible} onDismiss={onDismiss} style={styles.dialog}>
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
            text={closeText}
            onPress={onDismiss}
            style={[
              styles.closeButton,
              { backgroundColor: theme.colors.surface },
            ]}
            textProps={{ style: { color: theme.colors.onSurface }, theme }}
          />
        </>
      </Dialog>
    );
  }
}

export default withTheme(SelectDialog);
