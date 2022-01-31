import React from 'react';
import { View, Image, ViewProps, ImageSourcePropType } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';

// #region Styles
const styles = ScaledSheet.create({
  container: {
    overflow: 'hidden',
  },
  noPadding: {
    padding: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingStart: 0,
    paddingEnd: 0,
    paddingRight: 0,
    paddingLeft: 0,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
// #endregion

// #region Types
type ResizeModeType =
  | 'cover'
  | 'contain'
  | 'stretch'
  | 'repeat'
  | 'center'
  | null
  | undefined;

interface Props extends ViewProps {
  size?: number | null | undefined;
  source?: string | undefined;
  placeholder?: number | undefined;
  resizeMode?: ResizeModeType;
}

interface ImageProps {
  source?: string | undefined;
  placeholder?: number | undefined;
  resizeMode?: ResizeModeType;
}
// #endregion

const getImage = (props: ImageProps): null | React.ReactElement => {
  const { source, placeholder, resizeMode } = props;
  let imageSource: ImageSourcePropType | undefined = placeholder;

  if (source) {
    imageSource = { uri: source };
  }

  if (imageSource) {
    const notNullResizeMode =
      resizeMode == null || resizeMode === undefined ? 'stretch' : resizeMode;

    return (
      <Image
        source={imageSource}
        defaultSource={placeholder}
        resizeMode={notNullResizeMode}
        style={[styles.image, { resizeMode: notNullResizeMode }]}
      />
    );
  }

  return null;
};

export default (props: Props): React.ReactElement => {
  const { size, source, placeholder, resizeMode, style, ...other } = props;

  const scaledSize: number | undefined =
    size == null || size === undefined ? undefined : ms(size);

  return (
    <View
      style={[
        styles.container,
        style,
        { width: scaledSize, height: scaledSize },
        styles.noPadding,
      ]}
      {...other}
    >
      {getImage({ source, placeholder, resizeMode })}
    </View>
  );
};
