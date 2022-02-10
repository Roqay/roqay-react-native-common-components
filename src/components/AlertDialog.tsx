// External imports.
import React from 'react';
import { View } from 'react-native';
import { withTheme } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';
import { omit } from 'lodash';

// Types imports.
import type { Theme } from 'react-native-paper/lib/typescript/types';
import type { Props as DialogProps } from './Dialog';
import type { Props as TextProps } from './Text';
import type { Props as ButtonProps } from './Button';

// Internal imports.
import Dialog from './Dialog';
import Text from './Text';
import Button from './Button';

// #region Styles
const styles = ScaledSheet.create({
  actionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    marginTop: '32@msr',
  },
  action: {
    backgroundColor: '#00000000',
    paddingHorizontal: '8@msr',
    marginEnd: '8@msr',
    maxWidth: '80%',
  },
});
// #endregion

// #region Types
interface Action {
  action?: string;
  actionProps?: ButtonProps;
}

interface Props {
  dialogProps?: DialogProps;
  title?: string;
  titleProps?: TextProps;
  message?: string;
  messageProps?: TextProps;
  actions?: Action[];
  theme: Theme;
}
// #endregion

const AlertDialog = (props: Props): React.ReactElement => {
  const {
    dialogProps,
    title,
    titleProps,
    message,
    messageProps,
    actions,
    theme,
  } = props;

  const { type: titleType, size: titleSize, ...titleOther } = titleProps || {};

  return (
    <Dialog {...(dialogProps || {})}>
      <Text type={titleType || 'bold'} size={titleSize || 18} {...titleOther}>
        {title}
      </Text>
      <Text {...(messageProps || {})}>{message}</Text>
      <View style={styles.actionsContainer}>
        {actions?.map((action) => {
          if (action.action) {
            const {
              style: actionStyle,
              textProps: actionTextProps,
              ...actionOther
            } = action.actionProps || {};

            const { style: actionTextStyle, ...actionTextOther } =
              actionTextProps || {};

            return (
              <Button
                key={action.action}
                style={[styles.action, actionStyle]}
                textProps={{
                  style: [{ color: theme.colors.primary }, actionTextStyle],
                  theme: theme,
                  ...omit(actionTextOther, ['theme']),
                }}
                text={action.action}
                {...omit(actionOther, ['text'])}
              />
            );
          }

          return null;
        })}
      </View>
    </Dialog>
  );
};

export default withTheme(AlertDialog);
