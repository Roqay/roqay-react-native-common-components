// External imports.
import { ScaledSheet } from 'react-native-size-matters';
import { I18nManager } from 'react-native';

const styles = ScaledSheet.create({
  input: {
    width: '100%',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    fontSize: '13@msr',
    paddingHorizontal: '8@msr',
  },
  noVerticalMargin: {
    marginVertical: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  selectItem: {
    marginVertical: '4@msr',
  },
});

export default styles;
