// External imports.
import { Dimensions, Platform, StatusBar } from 'react-native';

const STATUSBAR_DEFAULT_HEIGHT: number = 20;
const STATUSBAR_X_HEIGHT: number = 44;
const STATUSBAR_IP12_HEIGHT: number = 47;
const STATUSBAR_IP12MAX_HEIGHT: number = 47;

const X_WIDTH: number = 375;
const X_HEIGHT: number = 812;

const XSMAX_WIDTH: number = 414;
const XSMAX_HEIGHT: number = 896;

const IP12_WIDTH: number = 390;
const IP12_HEIGHT: number = 844;

const IP12MAX_WIDTH: number = 428;
const IP12MAX_HEIGHT: number = 926;

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window');

let statusBarHeight: number = STATUSBAR_DEFAULT_HEIGHT;
let isIPhoneX_v: boolean = false;
let isIPhoneXMax_v: boolean = false;
let isIPhone12_v: boolean = false;
let isIPhone12Max_v: boolean = false;
let isIPhoneWithMonobrow_v: boolean = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV) {
  if (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) {
    isIPhoneWithMonobrow_v = true;
    isIPhoneX_v = true;
    statusBarHeight = STATUSBAR_X_HEIGHT;
  } else if (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT) {
    isIPhoneWithMonobrow_v = true;
    isIPhoneXMax_v = true;
    statusBarHeight = STATUSBAR_X_HEIGHT;
  } else if (W_WIDTH === IP12_WIDTH && W_HEIGHT === IP12_HEIGHT) {
    isIPhoneWithMonobrow_v = true;
    isIPhone12_v = true;
    statusBarHeight = STATUSBAR_IP12_HEIGHT;
  } else if (W_WIDTH === IP12MAX_WIDTH && W_HEIGHT === IP12MAX_HEIGHT) {
    isIPhoneWithMonobrow_v = true;
    isIPhone12Max_v = true;
    statusBarHeight = STATUSBAR_IP12MAX_HEIGHT;
  }
}

export const isIPhoneX = (): boolean => isIPhoneX_v;
export const isIPhoneXMax = (): boolean => isIPhoneXMax_v;
export const isIPhone12 = (): boolean => isIPhone12_v;
export const isIPhone12Max = (): boolean => isIPhone12Max_v;
export const isIPhoneWithMonobrow = (): boolean => isIPhoneWithMonobrow_v;

export const getStatusBarHeight = (skipAndroid?: boolean): number => {
  return Platform.select({
    ios: statusBarHeight,
    android: skipAndroid ? 0 : StatusBar.currentHeight,
    default: 0,
  });
};
