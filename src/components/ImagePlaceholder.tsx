// External imports.
import React from 'react';
import { View, Image, ViewProps, LayoutChangeEvent } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { withTheme } from 'react-native-paper';

// Types imports.
import type { Theme } from 'react-native-paper/lib/typescript/types';

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
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// #endregion

// #region Types
type ResizeModeType = 'cover' | 'contain' | 'stretch' | 'center';

type PriorityType = 'low' | 'normal' | 'high';

type CacheType = 'immutable' | 'web' | 'cacheOnly';

interface Props extends ViewProps {
  size?: number;
  source?: string;
  placeholder?: number;
  resizeMode?: ResizeModeType;
  priority?: PriorityType;
  cache?: CacheType;
  loadingProps?: LoadingProps;
  theme: Theme;
}

interface LoadingProps {
  showLoading?: boolean;
  color?: string;
  backgroundColor?: string;
}

interface ImageProps {
  source?: string;
  placeholder?: number;
  resizeMode?: ResizeModeType;
  priority?: PriorityType;
  cache?: CacheType;
  loadingProps?: LoadingProps;
  theme: Theme;
}

interface State {
  isLoading: boolean;
  isError: boolean;
  progress: number;
  progressSize: number;
}
// #endregion

class ImagePlaceholder extends React.PureComponent<Props, State> {
  // Variable for mount state.
  isComponentMounted: boolean = false;

  constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: false,
      isError: false,
      progress: 0,
      progressSize: 0,
    };
  }

  // #region Lifecycle
  componentDidMount() {
    // Set is mounted.
    this.isComponentMounted = true;
  }

  componentWillUnmount() {
    // Clear is mounted.
    this.isComponentMounted = false;
  }
  // #endregion

  setLoadingState = (isLoading: boolean): void => {
    if (this.isComponentMounted) {
      this.setState({ isLoading });
    }
  };

  setErrorState = (isError: boolean): void => {
    if (this.isComponentMounted) {
      this.setState({ isError, isLoading: false });
    }
  };

  setProgressState = (progress: number): void => {
    if (this.isComponentMounted) {
      this.setState({ progress });
    }
  };

  setProgressSizeState = (progressSize: number): void => {
    if (this.isComponentMounted) {
      this.setState({ progressSize });
    }
  };

  getImage = (props: ImageProps): null | React.ReactElement => {
    const {
      source,
      placeholder,
      resizeMode,
      priority,
      cache,
      loadingProps,
      theme,
    } = props;

    try {
      const FastImage = require('react-native-fast-image');
      const Progress = require('react-native-progress');
      require('react-native-svg');

      let notNullResizeMode;

      switch (resizeMode) {
        case 'contain':
          notNullResizeMode = FastImage.resizeMode.contain;
          break;
        case 'stretch':
          notNullResizeMode = FastImage.resizeMode.stretch;
          break;
        case 'center':
          notNullResizeMode = FastImage.resizeMode.center;
          break;
        default:
          notNullResizeMode = FastImage.resizeMode.cover;
          break;
      }

      let notNullPriority;

      switch (priority) {
        case 'low':
          notNullPriority = FastImage.priority.low;
          break;
        case 'high':
          notNullPriority = FastImage.priority.high;
          break;
        default:
          notNullPriority = FastImage.priority.normal;
          break;
      }

      let notNullCache;

      switch (cache) {
        case 'web':
          notNullCache = FastImage.cacheControl.web;
          break;
        case 'cacheOnly':
          notNullCache = FastImage.cacheControl.cacheOnly;
          break;
        default:
          notNullCache = FastImage.cacheControl.immutable;
          break;
      }

      const { isLoading, isError, progress, progressSize } = this.state;

      let shouldDisplayLoading: boolean = isLoading;

      if (loadingProps?.showLoading === false) {
        shouldDisplayLoading = false;
      }

      return (
        <>
          {(!source || isError || isLoading) && placeholder && (
            <Image
              source={placeholder}
              style={[styles.image, { resizeMode: notNullResizeMode }]}
              resizeMode={notNullResizeMode}
            />
          )}
          {Boolean(source) && !isError && (
            <FastImage
              style={styles.image}
              source={{
                uri: source,
                priority: notNullPriority,
                cache: notNullCache,
              }}
              resizeMode={notNullResizeMode}
              onLoadStart={() => this.setLoadingState(true)}
              onLoadEnd={() => this.setLoadingState(false)}
              onError={() => this.setErrorState(true)}
              onProgress={(e: {
                nativeEvent: { loaded: number; total: number };
              }) =>
                this.setProgressState(
                  e.nativeEvent.total > 0
                    ? e.nativeEvent.loaded / e.nativeEvent.total
                    : 0
                )
              }
            />
          )}
          {shouldDisplayLoading && (
            <View
              style={[
                styles.image,
                styles.loadingContainer,
                {
                  backgroundColor:
                    loadingProps?.backgroundColor == null ||
                    loadingProps?.backgroundColor === undefined
                      ? theme.colors.onSurface.concat('66')
                      : loadingProps?.backgroundColor,
                },
              ]}
              onLayout={(event: LayoutChangeEvent) =>
                this.setProgressSizeState(
                  (event.nativeEvent.layout.width >
                  event.nativeEvent.layout.height
                    ? event.nativeEvent.layout.height
                    : event.nativeEvent.layout.width) / 2
                )
              }
            >
              {/* {progressSize > 0 && ( */}
              <Progress.Pie
                indeterminate={progress <= 0}
                size={progressSize}
                progress={progress}
                color={
                  loadingProps?.color == null ||
                  loadingProps?.color === undefined
                    ? theme.colors.surface
                    : loadingProps?.color
                }
              />
              {/* )} */}
            </View>
          )}
        </>
      );
    } catch (error) {
      return null;
    }
  };

  render(): React.ReactElement {
    const {
      size,
      source,
      placeholder,
      resizeMode,
      priority,
      cache,
      loadingProps,
      style,
      theme,
      ...other
    } = this.props;

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
        {this.getImage({
          source,
          placeholder,
          resizeMode,
          priority,
          cache,
          loadingProps,
          theme,
        })}
      </View>
    );
  }
}

export default withTheme(ImagePlaceholder);
