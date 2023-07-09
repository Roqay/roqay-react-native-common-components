// External imports.
import React from 'react';
import { FlatList as NativeFlatList, RefreshControl } from 'react-native';
import { withTheme } from 'react-native-paper';
import { ScaledSheet, vs } from 'react-native-size-matters';

// Types imports.
import type { MD2Theme, MD3Theme } from 'react-native-paper';
import type { FlatListProps } from 'react-native';
import type FlatListItem from '../types/FlatListItem';

// #region Styles
const styles = ScaledSheet.create({
  list: {
    flex: 1,
    width: '100%',
    marginVertical: vs(4),
  },
  horizontalContainerStyle: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: '10%',
  },
});
// #endregion

// #region Types
export interface Props extends FlatListProps<FlatListItem> {
  refreshColor?: string;
}

interface PropsWithTheme extends Props {
  theme: MD2Theme | MD3Theme;
}
// #endregion

const FlatList = (props: PropsWithTheme): React.ReactElement => {
  const {
    refreshing,
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
      keyboardDismissMode={keyboardDismissMode || 'none'}
      keyExtractor={
        keyExtractor === undefined ? (item) => item.key : keyExtractor
      }
      onEndReachedThreshold={
        onEndReachedThreshold == null || onEndReachedThreshold === undefined
          ? 0.01
          : onEndReachedThreshold
      }
      style={[styles.list, style]}
      contentContainerStyle={
        horizontal
          ? [styles.horizontalContainerStyle, contentContainerStyle]
          : contentContainerStyle
      }
      refreshing={refreshing}
      refreshControl={
        refreshControl || onRefresh ? (
          <RefreshControl
            colors={refreshColor ? [refreshColor] : [theme.colors.primary]}
            tintColor={refreshColor || theme.colors.primary}
            refreshing={refreshing || false}
            onRefresh={onRefresh || undefined}
          />
        ) : undefined
      }
      {...other}
    />
  );
};

export default withTheme(FlatList);
