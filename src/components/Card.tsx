// External imports.
import React from 'react';
import { withTheme, Card as PaperCard } from 'react-native-paper';
import { ScaledSheet, ms } from 'react-native-size-matters';

// Types imports.
import type { MD2Theme, MD3Theme } from 'react-native-paper';

// #region Styles
const styles = ScaledSheet.create({
  card: {
    width: '95%',
    marginHorizontal: '2.5%',
    padding: ms(8),
    borderRadius: ms(8),
    marginVertical: ms(4),
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
  const { style, ...other } = props;
  return <PaperCard style={[styles.card, style]} {...other} />;
};

export default withTheme(Card);
