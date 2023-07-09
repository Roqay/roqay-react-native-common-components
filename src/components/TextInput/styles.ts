// External imports.
import { ScaledSheet, ms } from 'react-native-size-matters';
import { I18nManager } from 'react-native';

const styles = ScaledSheet.create({
  input: {
    width: '100%',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    fontSize: ms(13),
    paddingHorizontal: ms(8),
  },
  noVerticalMargin: {
    marginVertical: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  selectItem: {
    marginVertical: ms(4),
  },
});

export default styles;
