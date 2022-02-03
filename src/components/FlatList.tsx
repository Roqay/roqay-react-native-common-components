// External imports.
import React from 'react';
import {
  FlatList as NativeFlatList,
  FlatListProps,
  RefreshControl,
} from 'react-native';
import { withTheme } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';

// Types imports.
import type { Theme } from 'react-native-paper/lib/typescript/types';
import type FlatListItem from '../types/FlatListItem';

// #region Styles
const styles = ScaledSheet.create({
  list: {
    flex: 1,
    width: '100%',
    marginVertical: '4@vs',
  },
  horizontalContainerStyle: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: '10%',
  },
});
// #endregion

// #region Types
interface Props extends FlatListProps<FlatListItem> {
  isRefreshing?: boolean;
  onRefresh?: () => void;
  refreshColor?: string;
  theme: Theme;
}
// #endregion

const FlatList = (props: Props): React.ReactElement => {
  const {
    isRefreshing,
    onRefresh,
    refreshColor,
    showsHorizontalScrollIndicator,
    showsVerticalScrollIndicator,
    horizontal,
    keyboardShouldPersistTaps,
    keyboardDismissMode,
    keyExtractor,
    onEndReachedThreshold,
    style,
    contentContainerStyle,
    refreshControl,
    theme,
    ...other
  } = props;

  return (
    <NativeFlatList
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator || false}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator || false}
      horizontal={horizontal}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
      keyboardDismissMode={keyboardDismissMode || 'on-drag'}
      keyExtractor={
        keyExtractor === undefined ? (item) => item.key : keyExtractor
      }
      onEndReachedThreshold={onEndReachedThreshold || 0.01}
      style={[styles.list, style]}
      contentContainerStyle={
        horizontal
          ? [styles.horizontalContainerStyle, contentContainerStyle]
          : contentContainerStyle
      }
      refreshControl={
        refreshControl || onRefresh ? (
          <RefreshControl
            colors={refreshColor ? [refreshColor] : [theme.colors.primary]}
            tintColor={refreshColor || theme.colors.primary}
            refreshing={isRefreshing || false}
            onRefresh={onRefresh}
          />
        ) : undefined
      }
      {...other}
    />
  );
};

export default withTheme(FlatList);
