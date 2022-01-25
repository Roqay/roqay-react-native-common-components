import React from 'react';
import { Pressable, View, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Portal } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';

import type { Node } from 'react';
import type { EventSubscription } from 'react-native/Libraries/vendor/emitter/EventSubscription';

// #region Styles
const styles = ScaledSheet.create({
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000B3',
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialog: {
    width: '90%',
    marginVertical: '8@vs',
    backgroundColor: '#FFFFFF',
    borderRadius: '10@msr',
    overflow: 'hidden',
    alignItems: 'center',
    padding: '10@msr',
  },
});
// #endregion

// #region Types
interface Props {
  dialogPosition?: 'top' | 'bottom' | 'center' | null | undefined;
  message?: string | null | undefined;
  dismiss?: Function | null | undefined;
  actionText?: string | null | undefined;
  actionPress?: Function | null | undefined;
  showCancelAction?: boolean | null | undefined;
  dismissable?: boolean | null | undefined;
}

interface State {}
// #endregion

export default class Dialog extends React.PureComponent<Props, State> {
  // Variable for mount state.
  isComponentMounted: boolean = false;

  // Variable for android back handler.
  backHandlerSubscription: null | EventSubscription = null;

  // #region Lifecycle
  componentDidMount() {
    // Set is mounted.
    this.isComponentMounted = true;

    // Register subscription for back handler.
    this.backHandlerSubscription = BackHandler.addEventListener(
      'hardwareBackPress',
      this.onBackPress
    );
  }

  componentWillUnmount() {
    // Clear is mounted.
    this.isComponentMounted = false;

    // Remove subscription for back handler.
    this.backHandlerSubscription?.remove();
  }
  // #endregion
}
