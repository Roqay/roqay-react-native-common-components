import React from 'react';
import {
  ScrollView,
  AlertDialog,
  Button,
} from 'roqay-react-native-common-components';
import {ScaledSheet, vs} from 'react-native-size-matters';

export default function AlertDialogScreen() {
  const [singleActionAlertDialogVisible, setSingleActionAlertDialogVisible] =
    React.useState(false);

  const [twoActionsAlertDialogVisible, setTwoActionsAlertDialogVisible] =
    React.useState(false);

  const [threeActionsAlertDialogVisible, setThreeActionsAlertDialogVisible] =
    React.useState(false);

  const _showSingleActionAlertDialog = () =>
    setSingleActionAlertDialogVisible(true);

  const _hideSingleActionAlertDialog = () =>
    setSingleActionAlertDialogVisible(false);

  const _showTwoActionsAlertDialog = () =>
    setTwoActionsAlertDialogVisible(true);

  const _hideTwoActionsAlertDialog = () =>
    setTwoActionsAlertDialogVisible(false);

  const _showThreeActionsAlertDialog = () =>
    setThreeActionsAlertDialogVisible(true);

  const _hideThreeActionsAlertDialog = () =>
    setThreeActionsAlertDialogVisible(false);

  return (
    <>
      <ScrollView>
        <Button
          style={styles.button}
          onPress={_showSingleActionAlertDialog}
          text="Show Single Action Dialog"
        />
        <Button
          style={styles.button}
          onPress={_showTwoActionsAlertDialog}
          text="Show Two Actions Dialog"
        />
        <Button
          style={styles.button}
          onPress={_showThreeActionsAlertDialog}
          text="Show Three Actions Dialog"
        />
      </ScrollView>
      <AlertDialog
        title="Single Action Dialog"
        dialogProps={{
          visible: singleActionAlertDialogVisible,
          onDismiss: _hideSingleActionAlertDialog,
        }}
        actions={[
          {
            action: 'OK',
            actionProps: {onPress: _hideSingleActionAlertDialog},
          },
        ]}
      />
      <AlertDialog
        message="Two Actions Dialog"
        dialogProps={{
          visible: twoActionsAlertDialogVisible,
          onDismiss: _hideTwoActionsAlertDialog,
        }}
        actions={[
          {
            action: 'Action 1',
            actionProps: {onPress: _hideTwoActionsAlertDialog},
          },
          {
            action: 'Action 2',
            actionProps: {onPress: _hideTwoActionsAlertDialog},
          },
        ]}
      />
      <AlertDialog
        title="Three Actions Dialog"
        message="Three Actions Dialog"
        dialogProps={{
          visible: threeActionsAlertDialogVisible,
          onDismiss: _hideThreeActionsAlertDialog,
        }}
        actions={[
          {
            action: 'Action 1',
            actionProps: {onPress: _hideThreeActionsAlertDialog},
          },
          {
            action: 'Action 2',
            actionProps: {onPress: _hideThreeActionsAlertDialog},
          },
          {
            action: 'Action 3',
            actionProps: {onPress: _hideThreeActionsAlertDialog},
          },
        ]}
      />
    </>
  );
}

const styles = ScaledSheet.create({
  button: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: vs(8),
  },
});
