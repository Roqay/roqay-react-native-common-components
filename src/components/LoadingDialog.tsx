// External imports.
import React from 'react';
import { withTheme, ActivityIndicator } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';

// Types imports.
import type { MD2Theme, MD3Theme } from 'react-native-paper';

// Internal imports.
import Dialog from './Dialog';

// #region Styles
const styles = ScaledSheet.create({
  dialog: {
    backgroundColor: '#00000000',
  },
});
// #endregion

// #region Types
export interface Props {
  visible?: boolean;
}

interface PropsWithTheme extends Props {
  theme: MD2Theme | MD3Theme;
}
// #endregion

const LoadingDialog = (props: PropsWithTheme): React.ReactElement => {
  const { visible, theme } = props;

  return (
    <Dialog visible={visible} dismissable={false} style={styles.dialog}>
      <ActivityIndicator
        animating={visible}
        size="large"
        color={theme.colors.surface}
      />
    </Dialog>
  );
};

export default withTheme(LoadingDialog);
