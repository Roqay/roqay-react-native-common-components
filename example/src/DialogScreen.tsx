import React from 'react';
import { ScrollView } from 'react-native';
import { Dialog, Text, Button } from 'roqay-react-native-common-components';
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
        <Button
          style={styles.button}
          onPress={_showSimpleDialog}
          text="Show Simple Dialog"
        />
        <Button
          style={styles.button}
          onPress={_showTopDialog}
          text="Show Top Dialog"
        />
        <Button
          style={styles.button}
          onPress={_showBottomDialog}
          text="Show Bottom Dialog"
        />
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
    width: '90%',
    alignSelf: 'center',
    marginVertical: '8@vs',
  },
  text: {
    marginVertical: '16@vs',
  },
});
