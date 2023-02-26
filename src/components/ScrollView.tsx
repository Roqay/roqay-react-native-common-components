// External imports.
import React from 'react';
import { RefreshControl } from 'react-native';
import { withTheme } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Types imports.
import type {
  MD2Theme,
  MD3Theme,
} from 'react-native-paper/lib/typescript/types';

// #region Types
export type Props = React.ComponentProps<typeof KeyboardAwareScrollView> & {
  refreshing?: boolean;
  onRefresh?: () => void;
  refreshColor?: string;
};

type PropsWithTheme = Props & {
  theme: MD2Theme | MD3Theme;
};
// #endregion

const ScrollView = (props: PropsWithTheme): React.ReactElement => {
  const {
    refreshing,
    onRefresh,
    refreshColor,
    showsHorizontalScrollIndicator,
    showsVerticalScrollIndicator,
    keyboardShouldPersistTaps,
    keyboardDismissMode,
    refreshControl,
    theme,
    ...other
  } = props;

  return (
    <KeyboardAwareScrollView
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator || false}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator || false}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
      keyboardDismissMode={keyboardDismissMode || 'none'}
      refreshControl={
        refreshControl || onRefresh ? (
          <RefreshControl
            colors={refreshColor ? [refreshColor] : [theme.colors.primary]}
            tintColor={refreshColor || theme.colors.primary}
            refreshing={refreshing || false}
            onRefresh={onRefresh}
          />
        ) : undefined
      }
      {...other}
    />
  );
};

export default withTheme(ScrollView);
