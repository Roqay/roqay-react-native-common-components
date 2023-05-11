// Types imports.
import type { TextInputProps, MD2Theme, MD3Theme } from 'react-native-paper';
import type { Props as TextProps } from '../Text';
import type SelectItem from '../../types/SelectItem';

export interface SelectProps {
  mode?: 'dialog' | 'dropdown';
  items?: SelectItem[];
  selectedItems?: SelectItem[];
  allowMultiSelect?: boolean;
  onItemsSelected?: (selectedItems?: SelectItem[]) => void;
  searchLabel?: string;
  noDataMessage?: string;
  closeText?: string;
  trimLength?: number;
}

export interface ErrorProps {
  errorMessage?: string;
  textProps?: Omit<TextProps, 'children'>;
}

export interface TopLabelProps {
  label?: string;
  textProps?: Omit<TextProps, 'children'>;
}

export default interface Props extends Omit<TextInputProps, 'theme'> {
  style?: TextInputProps['style'] & { [key: string]: any };
  isRequired?: boolean;
  topLabelProps?: TopLabelProps;
  errorProps?: ErrorProps;
  selectProps?: SelectProps;
  ref?: any;
  positiveNumbersOnly?: boolean;
  hasPasswordToggle?: boolean;
}

export interface PropsWithTheme extends Props {
  theme: MD2Theme | MD3Theme;
}
