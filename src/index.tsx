// Components import.
import AlertDialog from './components/AlertDialog';
import Button from './components/Button';
import Card from './components/Card';
import Checkbox from './components/Checkbox';
import Dialog from './components/Dialog';
import FlatList from './components/FlatList';
import IconButton from './components/IconButton';
import ImagePlaceholder from './components/ImagePlaceholder';
import LoadingDialog from './components/LoadingDialog';
import RadioButton from './components/RadioButton';
import ScrollView from './components/ScrollView';
import SelectDialog from './components/SelectDialog';
import Text from './components/Text';
import TextInput from './components/TextInput';

// Utils import.
import {
  isIPhoneX,
  isIPhoneXMax,
  isIPhone12,
  isIPhone12Max,
  isIPhoneWithMonobrow,
  getStatusBarHeight,
} from './utils/StatusBarHeight';
import { configureLog } from './utils/LogConfig';

// Types import.
import type FlatListItem from './types/FlatListItem';
import type SelectItem from './types/SelectItem';

// Components export.
export {
  AlertDialog,
  Button,
  Card,
  Checkbox,
  Dialog,
  FlatList,
  IconButton,
  ImagePlaceholder,
  LoadingDialog,
  RadioButton,
  ScrollView,
  SelectDialog,
  Text,
  TextInput,
};

// Utils export.
export {
  isIPhoneX,
  isIPhoneXMax,
  isIPhone12,
  isIPhone12Max,
  isIPhoneWithMonobrow,
  getStatusBarHeight,
  configureLog,
};

// Types export.
export type { FlatListItem, SelectItem };
