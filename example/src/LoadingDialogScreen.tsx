import React from 'react';
import {
  ScrollView,
  Button,
  LoadingDialog,
} from 'roqay-react-native-common-components';
import {ScaledSheet} from 'react-native-size-matters';

export default function LoadingDialogScreen() {
  const [visibleTimeLeft, setVisibleTimeLeft] = React.useState(0);

  const _showDialog = () => setVisibleTimeLeft(5);

  React.useEffect(() => {
    if (!visibleTimeLeft) return;

    const timeoutId = setTimeout(() => {
      setVisibleTimeLeft(t => t - 1);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [visibleTimeLeft]);

  return (
    <>
      <ScrollView>
        <Button
          style={styles.button}
          onPress={_showDialog}
          text="Show Loading Dialog"
        />
      </ScrollView>
      <LoadingDialog visible={visibleTimeLeft > 0} />
    </>
  );
}

const styles = ScaledSheet.create({
  button: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: '8@vs',
  },
});
