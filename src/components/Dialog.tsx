// External imports.
import React from 'react';
import { Pressable, BackHandler } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import { withTheme, Portal } from 'react-native-paper';
import { ScaledSheet, vs, ms } from 'react-native-size-matters';

// Types imports.
import type { MD2Theme, MD3Theme } from 'react-native-paper';
import type {
  NativeEventSubscription,
  StyleProp,
  ViewStyle,
} from 'react-native';

// #region Styles
const styles = ScaledSheet.create({
  overlay: {
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
  },
  dialog: {
    width: '90%',
    marginVertical: vs(8),
    borderRadius: ms(10),
    overflow: 'hidden',
    alignItems: 'center',
    padding: ms(10),
  },
});
// #endregion

// #region Types
export interface Props {
  visible?: boolean;
  position?: 'top' | 'bottom' | 'center';
  onDismiss?: () => void;
  dismissable?: boolean;
  style?: StyleProp<ViewStyle>;
  overlayColor?: string;
  children?: React.ReactNode;
}

interface PropsWithTheme extends Props {
  theme: MD2Theme | MD3Theme;
}

interface State {}
// #endregion

class Dialog extends React.PureComponent<PropsWithTheme, State> {
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
      this._onBackPress
    );
  }

  componentWillUnmount() {
    // Clear is mounted.
    this.isComponentMounted = false;

    // Remove subscription for back handler.
    this.backHandlerSubscription?.remove();
  }
  // #endregion

  _onBackPress = (): boolean => {
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
    const {
      visible,
      position,
      onDismiss,
      dismissable,
      style,
      overlayColor,
      children,
      theme,
    } = this.props;

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

      const overlayStyle = [
        styles.overlay,
        {
          backgroundColor:
            overlayColor == null || overlayColor === undefined
              ? theme.colors.backdrop
              : overlayColor,
        },
      ];

      return (
        <Portal>
          <Pressable
            style={overlayStyle}
            onPress={isDialogDismissable ? onDismiss : null}
          >
            <SafeAreaView
              edges={edges}
              style={[styles.safeArea, { justifyContent: justifyContent }]}
            >
              <Pressable
                style={[
                  styles.dialog,
                  { backgroundColor: theme.colors.surface },
                  style,
                ]}
                onPress={() => {}}
              >
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

export default withTheme(Dialog);
