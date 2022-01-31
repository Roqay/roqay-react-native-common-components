import React from 'react';
import { ScrollView } from 'react-native';
import { ImagePlaceholder, Text } from 'eslam-elmeniawy-components';
import { ScaledSheet } from 'react-native-size-matters';

export default function ImagePlaceholderScreen() {
  return (
    <ScrollView>
      <Text style={styles.text}>Invalid Url</Text>
      <ImagePlaceholder
        style={styles.image}
        size={100}
        source="https://invalid"
        placeholder={require('./placeholder.png')}
      />
      <Text style={styles.text}>Valid Url</Text>
      <ImagePlaceholder
        style={styles.image}
        size={100}
        source="https://unsplash.it/500"
        placeholder={require('./placeholder.png')}
      />
    </ScrollView>
  );
}

const styles = ScaledSheet.create({
  text: {
    marginTop: '8@vs',
    alignSelf: 'center',
  },
  image: {
    marginBottom: '8@vs',
    alignSelf: 'center',
  },
});
