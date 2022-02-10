// External imports.
import { NativeModules } from 'react-native';

// #region Types
type LogLevel = 'INFO' | 'LOG' | 'WARN' | 'ERROR';

type Options = {
  appName?: string;
  firebaseLogLevels?: LogLevel[];
  isLocalLogEnable?: boolean;
};
// #endregion

let firebaseLogLevels: LogLevel[] = [];
let isLocalLogEnable: boolean = false;

const configureReactotron = (appName?: string): void => {
  try {
    const Reactotron = require('reactotron-react-native');
    const { scriptURL } = NativeModules.SourceCode;
    const scriptHostname = scriptURL.split('://')[1].split(':')[0];

    Reactotron.configure({
      name: appName,
      host: scriptHostname,
    })
      .useReactNative()
      .connect();

    // Clear log on start.
    if (Reactotron.clear) {
      Reactotron?.clear();
    }
  } catch (e) {
    console.error(e);
  }
};

const info = (message: string, ...args: any[]): void => {
  try {
    const Reactotron = require('reactotron-react-native');
    const crashlytics = require('@react-native-firebase/crashlytics');
    const tag = 'INFO';

    if (firebaseLogLevels.includes(tag)) {
      crashlytics().log(
        `## ${tag} ## Message: ${message} ## Data: ${JSON.stringify(args)}`
      );
    }

    if (isLocalLogEnable) {
      Reactotron.display({
        name: tag,
        preview: message,
        value: { message, args },
      });
    }
  } catch (e) {}
};

const log = (message: string, ...args: any[]): void => {
  try {
    const Reactotron = require('reactotron-react-native');
    const crashlytics = require('@react-native-firebase/crashlytics');
    const tag = 'LOG';

    if (firebaseLogLevels.includes(tag)) {
      crashlytics().log(
        `## ${tag} ## Message: ${message} ## Data: ${JSON.stringify(args)}`
      );
    }

    if (isLocalLogEnable) {
      Reactotron.display({
        name: tag,
        preview: message,
        value: { message, args },
      });
    }
  } catch (e) {}
};

const warn = (message: string, ...args: any[]): void => {
  try {
    const Reactotron = require('reactotron-react-native');
    const crashlytics = require('@react-native-firebase/crashlytics');
    const tag = 'WARN';

    if (firebaseLogLevels.includes(tag)) {
      crashlytics().log(
        `## ${tag} ## Message: ${message} ## Data: ${JSON.stringify(args)}`
      );
    }

    if (isLocalLogEnable) {
      Reactotron.display({
        name: tag,
        preview: message,
        value: { message, args },
        important: true,
      });
    }
  } catch (e) {}
};

const error = (message: string, ...args: any[]): void => {
  try {
    const Reactotron = require('reactotron-react-native');
    const crashlytics = require('@react-native-firebase/crashlytics');
    const tag = 'ERROR';

    if (firebaseLogLevels.includes(tag)) {
      crashlytics().recordError(
        new Error(
          `## ${tag} ## Message: ${message} ## Data: ${JSON.stringify(args)}`
        )
      );
    }

    if (isLocalLogEnable) {
      Reactotron.display({
        name: tag,
        preview: message,
        value: { message, args },
        important: true,
      });
    }
  } catch (e) {}
};

const connectConsoleToReactotron = (): void => {
  console.info = info;
  console.log = log;
  console.warn = warn;
  console.error = error;
};

export const configureLog = (options?: Options): void => {
  firebaseLogLevels = options?.firebaseLogLevels || [];
  isLocalLogEnable = options?.isLocalLogEnable || false;
  configureReactotron(options?.appName);
  connectConsoleToReactotron();
};
