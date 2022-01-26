import React from 'react';
import {
  Pressable,
  BackHandler,
  NativeEventSubscription,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import { Portal } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';

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
  visible?: boolean | null | undefined;
  position?: 'top' | 'bottom' | 'center' | null | undefined;
  onDismiss?: () => void | null | undefined;
  dismissable?: boolean | null | undefined;
  style?: StyleProp<ViewStyle> | null | undefined;
  children?: React.ReactNode | null | undefined;
}

interface State {}
// #endregion

export default class Dialog extends React.PureComponent<Props, State> {
  // Variable for mount state.
  isComponentMounted: boolean = false;

  // Variable for android back handler.
  backHandlerSubscription: null | NativeEventSubscription = null;

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

  onBackPress: () => boolean = () => {
    const { visible, onDismiss, dismissable } = this.props;

    if (visible) {
      const isDialogDismissable =
        dismissable == null || dismissable === undefined ? true : dismissable;

      if (isDialogDismissable && onDismiss) {
        onDismiss();
      }

      return true;
    } else {
      return false;
    }
  };

  render(): null | React.ReactElement {
    const { visible, position, onDismiss, dismissable, style, children } =
      this.props;

    if (visible) {
      const edges: Edge[] = ['right', 'left'];

      let justifyContent:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | undefined;

      switch (position) {
        case 'top':
          edges.push('bottom');
          justifyContent = 'flex-start';
          break;
        case 'bottom':
          edges.push('top');
          justifyContent = 'flex-end';
          break;
        default:
          edges.push('top', 'bottom');
          justifyContent = 'center';
          break;
      }

      const isDialogDismissable =
        dismissable == null || dismissable === undefined ? true : dismissable;

      return (
        <Portal>
          <Pressable
            style={styles.overlay}
            onPress={isDialogDismissable ? onDismiss : null}
          >
            <SafeAreaView
              edges={edges}
              style={[styles.safeArea, { justifyContent: justifyContent }]}
            >
              <Pressable style={[styles.dialog, style]} onPress={() => {}}>
                {children}
              </Pressable>
            </SafeAreaView>
          </Pressable>
        </Portal>
      );
    }

    return null;
  }
}
