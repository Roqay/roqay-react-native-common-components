// External imports.
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  input: {
    width: '100%',
    textAlign: 'left',
    fontSize: '13@msr',
    lineHeight: '26@msr',
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
