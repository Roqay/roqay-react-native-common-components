import React from 'react';
import { Button, Text } from 'react-native-paper';
import { Dialog } from 'eslam-elmeniawy-components';
import { ScaledSheet } from 'react-native-size-matters';

export default function DialogScreen() {
  const [visible, setVisible] = React.useState(false);

  const _showDialog = () => setVisible(true);

  const _hideDialog = () => setVisible(false);

  return (
    <>
      <Button style={styles.button} onPress={_showDialog}>
        Show Dialog
      </Button>
      <Dialog visible={visible} onDismiss={_hideDialog}>
        <Text>This is simple dialog</Text>
      </Dialog>
    </>
  );
}

const styles = ScaledSheet.create({
  button: {
    marginVertical: '8@vs',
  },
});
