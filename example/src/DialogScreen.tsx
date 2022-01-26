import React from 'react';
import { ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Dialog } from 'eslam-elmeniawy-components';
import { ScaledSheet } from 'react-native-size-matters';

export default function DialogScreen() {
  const [simpleDialogVisible, setSimpleDialogVisible] = React.useState(false);
  const [topDialogVisible, setTopDialogVisible] = React.useState(false);
  const [bottomDialogVisible, setBottomDialogVisible] = React.useState(false);

  const _showSimpleDialog = () => setSimpleDialogVisible(true);

  const _hideSimpleDialog = () => setSimpleDialogVisible(false);

  const _showTopDialog = () => setTopDialogVisible(true);

  const _hideTopDialog = () => setTopDialogVisible(false);

  const _showBottomDialog = () => setBottomDialogVisible(true);

  const _hideBottomDialog = () => setBottomDialogVisible(false);

  return (
    <>
      <ScrollView>
        <Button style={styles.button} onPress={_showSimpleDialog}>
          Show Simple Dialog
        </Button>
        <Button style={styles.button} onPress={_showTopDialog}>
          Show Top Dialog
        </Button>
        <Button style={styles.button} onPress={_showBottomDialog}>
          Show Bottom Dialog
        </Button>
      </ScrollView>
      <Dialog visible={simpleDialogVisible} onDismiss={_hideSimpleDialog}>
        <Text style={styles.text}>This is simple dialog</Text>
      </Dialog>
      <Dialog
        visible={topDialogVisible}
        onDismiss={_hideTopDialog}
        position="top"
      >
        <Text style={styles.text}>This is top dialog</Text>
      </Dialog>
      <Dialog
        visible={bottomDialogVisible}
        onDismiss={_hideBottomDialog}
        position="bottom"
      >
        <Text style={styles.text}>This is bottom dialog</Text>
      </Dialog>
    </>
  );
}

const styles = ScaledSheet.create({
  button: {
    marginVertical: '8@vs',
  },
  text: {
    marginVertical: '16@vs',
  },
});
