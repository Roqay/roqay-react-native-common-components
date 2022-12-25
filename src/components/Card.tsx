// External imports.
import React from 'react';
import { withTheme, Card as PaperCard } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';

// Types imports.
import type {
  MD2Theme,
  MD3Theme,
} from 'react-native-paper/lib/typescript/types';

// #region Styles
const styles = ScaledSheet.create({
  card: {
    width: '95%',
    alignSelf: 'center',
    padding: '8@msr',
    borderRadius: '8@msr',
    marginVertical: '4@msr',
  },
});
// #endregion

// #region Types
export type Props = React.ComponentProps<typeof PaperCard>;

type PropsWithTheme = Props & {
  theme: MD2Theme | MD3Theme;
};
// #endregion

const Card = (props: PropsWithTheme): React.ReactElement => {
  const { mode, elevation, style, ...other } = props;

  switch (mode) {
    case 'outlined':
      return (
        <PaperCard
          mode="outlined"
          elevation={undefined}
          style={[styles.card, style]}
          {...other}
        />
      );
    default:
      return (
        <PaperCard
          mode="elevated"
          elevation={elevation === undefined ? 2 : elevation}
          style={[styles.card, style]}
          {...other}
        />
      );
  }
};

export default withTheme(Card);
