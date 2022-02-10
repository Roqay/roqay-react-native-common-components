// External imports.
import { NativeModules } from 'react-native';

let Reactotron: {
  configure: (arg0: { name: string | undefined; host: any }) => {
    (): any;
    new (): any;
    useReactNative: {
      (): { (): any; new (): any; connect: { (): void; new (): any } };
      new (): any;
    };
  };
  clear: () => void;
  display: (arg0: {
    name: string;
    preview: string;
    value:
      | { message: string; args: any[] }
      | { message: string; args: any[] }
      | { message: string; args: any[] }
      | { message: string; args: any[] };
    important?: boolean;
  }) => void;
};

let crashlytics: () => {
  (): any;
  new (): any;
  log: { (arg0: string): void; new (): any };
  recordError: { (arg0: Error): void; new (): any };
};

try {
  Reactotron = require('reactotron-react-native');
  crashlytics = require('@react-native-firebase/crashlytics');
} catch (e) {}

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
  if (Reactotron) {
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
      Reactotron.clear();
    }
  }
};

const info = (message: string, ...args: any[]): void => {
  const tag = 'INFO';

  if (crashlytics && firebaseLogLevels.includes(tag)) {
    crashlytics().log(
      `## ${tag} ## Message: ${message} ## Data: ${JSON.stringify(args)}`
    );
  }

  if (Reactotron && isLocalLogEnable) {
    Reactotron.display({
      name: tag,
      preview: message,
      value: { message, args },
    });
  }
};

const log = (message: string, ...args: any[]): void => {
  const tag = 'LOG';

  if (crashlytics && firebaseLogLevels.includes(tag)) {
    crashlytics().log(
      `## ${tag} ## Message: ${message} ## Data: ${JSON.stringify(args)}`
    );
  }

  if (Reactotron && isLocalLogEnable) {
    Reactotron.display({
      name: tag,
      preview: message,
      value: { message, args },
    });
  }
};

const warn = (message: string, ...args: any[]): void => {
  const tag = 'WARN';

  if (crashlytics && firebaseLogLevels.includes(tag)) {
    crashlytics().log(
      `## ${tag} ## Message: ${message} ## Data: ${JSON.stringify(args)}`
    );
  }

  if (Reactotron && isLocalLogEnable) {
    Reactotron.display({
      name: tag,
      preview: message,
      value: { message, args },
      important: true,
    });
  }
};

const error = (message: string, ...args: any[]): void => {
  const tag = 'ERROR';

  if (crashlytics && firebaseLogLevels.includes(tag)) {
    crashlytics().recordError(
      new Error(
        `## ${tag} ## Message: ${message} ## Data: ${JSON.stringify(args)}`
      )
    );
  }

  if (Reactotron && isLocalLogEnable) {
    Reactotron.display({
      name: tag,
      preview: message,
      value: { message, args },
      important: true,
    });
  }
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
