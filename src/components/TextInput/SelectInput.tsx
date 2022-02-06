// External imports.
import React from 'react';
import { TouchableRipple, Menu } from 'react-native-paper';
import { View } from 'react-native';
import { omit } from 'lodash';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Types imports.
import type Props from './Props';
import type SelectItem from '../../types/SelectItem';

// Internal imports.
import DefaultInput from './DefaultInput';
import SelectDialog from '../SelectDialog';
import Checkbox from '../Checkbox';
import styles from './styles';

// #region Types
interface State {
  isSelectVisible: boolean;
  value: string;
  selectedItems?: SelectItem[];
}
// #endregion

export default class SelectInput extends React.PureComponent<Props, State> {
  // Variable for mount state.
  isComponentMounted: boolean = false;

  constructor(props: Props) {
    super(props);

    this.state = {
      isSelectVisible: false,
      value: props.value || '',
      selectedItems: props.selectProps?.selectedItems,
    };
  }

  // #region Lifecycle
  static getDerivedStateFromProps(props: Props, state: State): State {
    const selectedItems = props.selectProps?.selectedItems || [];
    let value = props.placeholder || '';

    if (selectedItems.length) {
      const names: string[] = [];

      selectedItems.forEach((item) => {
        if (item) {
          names.push(item.dropdownTitle || '');
        }
      });

      value = names.join(' - ');
    }

    return {
      ...state,
      value,
      selectedItems: props.selectProps?.selectedItems,
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

  // #region Press events
  _onItemPressed = (item: SelectItem): void => {
    const { selectedItems } = this.state;
    const { selectProps } = this.props;
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
    } else if (selectProps?.allowMultiSelect) {
      newSelectedItems.push(item);
    } else {
      newSelectedItems = [item];
    }

    if (this.isComponentMounted) {
      this.setState({ selectedItems: newSelectedItems }, () => {
        this._onItemsSelected(newSelectedItems);

        if (!selectProps?.allowMultiSelect) {
          this._dismissSelect();
        }
      });
    }
  };
  // #endregion

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

  _showSelect = (): void => {
    if (this.isComponentMounted) {
      this.setState({ isSelectVisible: true });
    }
  };

  _dismissSelect = (): void => {
    if (this.isComponentMounted) {
      this.setState({ isSelectVisible: false });
    }
  };

  _onItemsSelected = (selectedItems?: SelectItem[]): void => {
    this._setSelectedText(selectedItems);
    const { selectProps } = this.props;

    if (selectProps?.onItemsSelected) {
      selectProps?.onItemsSelected(selectedItems);
    }
  };

  _setSelectedText = (selectedItems?: SelectItem[]): void => {
    let value: string;

    if (selectedItems?.length) {
      const names: string[] = [];

      selectedItems?.forEach((item) => {
        if (item) {
          names.push(item.dropdownTitle || '');
        }
      });

      value = names.join(' - ');
    } else {
      const { value: propsValue } = this.props;
      value = propsValue || '';
    }

    if (this.isComponentMounted) {
      this.setState({ value });
    }
  };

  _getInput = (): React.ReactElement => {
    const { right, ...other } = this.props;
    const inputProps = omit(other, ['selectProps', 'editable']);
    return (
      <DefaultInput
        editable={false}
        right={right === undefined ? <Icon name="menu-down" /> : right}
        {...inputProps}
      />
    );
  };

  _getListItem = (item: SelectItem): React.ReactElement => {
    const { theme } = this.props;

    return (
      <Checkbox
        key={item.key}
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
    const { selectProps, editable, theme } = this.props;
    const { isSelectVisible } = this.state;

    return (
      <>
        <TouchableRipple
          disabled={!editable}
          onPress={isSelectVisible ? this._dismissSelect : this._showSelect}
        >
          <View pointerEvents="box-only">
            {selectProps?.mode === 'dropdown' ? (
              <Menu
                visible={isSelectVisible}
                onDismiss={this._dismissSelect}
                anchor={this._getInput()}
                theme={theme}
              >
                {selectProps?.items?.map((item) => this._getListItem(item))}
              </Menu>
            ) : (
              this._getInput()
            )}
          </View>
        </TouchableRipple>
        {selectProps?.mode !== 'dropdown' && (
          <SelectDialog
            visible={isSelectVisible}
            onDismiss={this._dismissSelect}
            items={selectProps?.items}
            selectedItems={selectProps?.selectedItems}
            allowMultiSelect={selectProps?.allowMultiSelect}
            onItemsSelected={this._onItemsSelected}
            searchLabel={selectProps?.searchLabel}
            noDataMessage={selectProps?.noDataMessage}
            closeText={selectProps?.closeText}
          />
        )}
      </>
    );
  }
}
