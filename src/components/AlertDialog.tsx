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
  dialog: {
    alignItems: 'stretch',
  },
  actionsContainer: {
    marginTop: '32@msr',
  },
  actionsContainerRow: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  actionsContainerColumn: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  action: {
    backgroundColor: '#00000000',
    paddingHorizontal: '8@msr',
    maxWidth: '80%',
    marginTop: '8@msr',
  },
  actionRow: {
    marginStart: '8@msr',
  },
});
// #endregion

// #region Types
export interface Action {
  action?: string;
  actionProps?: ButtonProps;
}

export interface Props {
  dialogProps?: DialogProps;
  title?: string;
  titleProps?: TextProps;
  message?: string;
  messageProps?: TextProps;
  actions?: Action[];
}

interface PropsWithTheme extends Props {
  theme: Theme;
}
// #endregion

const AlertDialog = (props: PropsWithTheme): React.ReactElement => {
  const {
    dialogProps,
    title,
    titleProps,
    message,
    messageProps,
    actions,
    theme,
  } = props;

  const { style: dialogStyle, ...dialogOther } = dialogProps || {};
  const { type: titleType, size: titleSize, ...titleOther } = titleProps || {};

  return (
    <Dialog style={[styles.dialog, dialogStyle]} {...dialogOther}>
      {Boolean(title) && (
        <Text type={titleType || 'bold'} size={titleSize || 18} {...titleOther}>
          {title}
        </Text>
      )}
      {Boolean(message) && <Text {...(messageProps || {})}>{message}</Text>}
      <View
        style={[
          styles.actionsContainer,
          (actions?.length || 0) > 2
            ? styles.actionsContainerColumn
            : styles.actionsContainerRow,
        ]}
      >
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
                style={[
                  styles.action,
                  (actions?.length || 0) > 2 ? undefined : styles.actionRow,
                  actionStyle,
                ]}
                textProps={{
                  style: [{ color: theme.colors.primary }, actionTextStyle],
                  ...actionTextOther,
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
